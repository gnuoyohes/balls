import './style.css'
import GLOBALS from './globals.js'
import * as sound from './sound.js'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { BoxLineGeometry } from 'three/addons/geometries/BoxLineGeometry.js'
import Stats from 'three/addons/libs/stats.module.js'
import { GUI } from 'three/addons/libs/lil-gui.module.min.js'
import RAPIER from '@dimforge/rapier3d-compat'

// THREE
let scene, camera, controls, renderer;
let clock;
let stats, guiOptions;
let intersectables; // THREE objects used for raycast

// RAPIER
let gravity, world;
let eventQueue;

// other
let objects; // KEY: collision handler; VALUE: [THREE Mesh, Rapier RigidBody, shape, size, color] if dynamic body, null otherwise
let mouseDownTime;
let velocities;

await RAPIER.init();
init();

function createScene() {

    function createWall(pX, pY, pZ, rX, rY, rZ, shadow=false) {
        const d = GLOBALS.boxDimensions;
        const wall = new THREE.Mesh(
            new THREE.BoxGeometry(d.x+0.1, GLOBALS.wallThickness, d.z+0.1),
            new THREE.ShadowMaterial({ color: GLOBALS.wallColor })
        );
        wall.position.set(pX, pY, pZ);
        wall.rotation.set(rX, rY, rZ);
        if (shadow) wall.receiveShadow = true;
        scene.add( wall );
        const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(rX, rY, rZ));
        const wallBody = world.createRigidBody(
            RAPIER.RigidBodyDesc.fixed()
            .setTranslation(pX, pY, pZ)
            .setRotation({ w: q.w, x: q.x, y: q.y, z: q.z })
        );
        const wallShape = RAPIER.ColliderDesc.cuboid(d.x/2, GLOBALS.wallThickness/2, d.z/2);
        const collider = world.createCollider(wallShape, wallBody);
        objects.set(collider.handle, null);
    }

    function createPlane(pX, pY, pZ, rX, rY, rZ) {
        const plane = new THREE.Mesh(
            new THREE.BoxGeometry(GLOBALS.boxDimensions.x, 0.001, GLOBALS.boxDimensions.z),
            new THREE.MeshBasicMaterial({ visible: false })
        );
        plane.position.set(pX, pY, pZ);
        plane.rotation.set(rX, rY, rZ);
        scene.add(plane);
        intersectables.push(plane);
    }

    function createBox(pX, pY, pZ) {
        const box = new THREE.Mesh(
            new THREE.BoxGeometry(GLOBALS.boxDimensions.x/2, GLOBALS.boxDimensions.y/2, GLOBALS.boxDimensions.z/2),
            new THREE.MeshBasicMaterial({ visible: false })
        );
        box.position.set(pX, pY, pZ);
        scene.add(box);
        intersectables.push(box);
    }

    scene = new THREE.Scene();
    scene.background = new THREE.Color( GLOBALS.backgroundColor );

    // lights
    const fillLight = new THREE.HemisphereLight( GLOBALS.lightColor, 0x00668d, 1.5 );
    scene.add( fillLight );

    const directionalLight = new THREE.DirectionalLight( GLOBALS.lightColor, 2.5 );
    directionalLight.position.set( 0, GLOBALS.boxDimensions.y, 0 );
    directionalLight.castShadow = true;
    // directionalLight.shadow.blurSamples = 10;
    // directionalLight.shadow.radius = 5;
    directionalLight.shadow.mapSize.x = GLOBALS.lightShadowMapSize;
    directionalLight.shadow.mapSize.y = GLOBALS.lightShadowMapSize;
    scene.add( directionalLight );
    // const helper2 = new THREE.DirectionalLightHelper( directionalLight, 1 );
    // scene.add( helper2 );

    // room grid
    const room = new THREE.LineSegments(
        new BoxLineGeometry( GLOBALS.boxDimensions.x, GLOBALS.boxDimensions.y, GLOBALS.boxDimensions.z, 10, 10, 10 ),
        new THREE.LineBasicMaterial( { color: GLOBALS.wallColor } )
    );
    room.geometry.translate( 0, GLOBALS.boxDimensions.x/2, 0 );
    scene.add( room );

    const x = GLOBALS.boxDimensions.x;
    const y = GLOBALS.boxDimensions.y;
    const z = GLOBALS.boxDimensions.z;
    const t = GLOBALS.wallThickness/2;

    // walls
    createWall(0, -1*t, 0, 0, 0, 0, true); // floor
    createWall(0, x+t, 0, 0, 0, 0); // ceiling
    createWall(0, x/2, -1*(x/2+t), Math.PI/2, 0, 0); // north
    createWall(0, x/2, x/2+t, Math.PI/2, 0, 0); // south
    createWall(x/2+t, x/2, 0, Math.PI/2, 0, Math.PI/2); // east
    createWall(-1*(x/2+t), x/2, 0, Math.PI/2, 0, Math.PI/2); // west

    // meshes to intersect with raycaster
    intersectables = [];
    
    // invisible intersectables and boxes
    // createPlane(0, y/6, 0, 0, 0, 0);
    // createPlane(0, y/3, 0, 0, 0, 0);
    // createPlane(0, y/2, 0, 0, 0, 0);
    // createPlane(0, 2*y/3, 0, 0, 0, 0);
    // createPlane(0, 5*y/6, 0, 0, 0, 0);

    // createPlane(0, y/2, -1*z/3, Math.PI/2, 0, 0);
    // createPlane(0, y/2, -1*z/6, Math.PI/2, 0, 0);
    // createPlane(0, y/2, 0, Math.PI/2, 0, 0);
    // createPlane(0, y/2, 1*z/6, Math.PI/2, 0, 0);
    // createPlane(0, y/2, 1*z/3, Math.PI/2, 0, 0);

    // createPlane(-1*x/3, y/2, 0, 0, 0, Math.PI/2);
    // createPlane(-1*x/6, y/2, 0, 0, 0, Math.PI/2);
    // createPlane(0, y/2, 0, 0, 0, Math.PI/2);
    // createPlane(1*x/6, y/2, 0, 0, 0, Math.PI/2);
    // createPlane(1*x/3, y/2, 0, 0, 0, Math.PI/2);

    const x2 = x/2, x4 = x/4;
    createBox(x4, x4, x4);
    createBox(x4, x4, -1*x4);
    createBox(x4, x2+x4, x4);
    createBox(x4, x2+x4, -1*x4);
    createBox(-1*x4, x4, x4);
    createBox(-1*x4, x4, -1*x4);
    createBox(-1*x4, x2+x4, x4);
    createBox(-1*x4, x2+x4, -1*x4);
}

function launchObject(position, direction) {
    if (guiOptions.shape != 'None') {
        let mesh, colliderDesc;
        const color = guiOptions.color;
        const material = new THREE.MeshPhongMaterial({ color: color });
        const size = guiOptions.size * GLOBALS.object.sizeScale;
        const shape = guiOptions.shape;

        switch(shape) {
            case 'Sphere':
                mesh = new THREE.Mesh(
                    new THREE.SphereGeometry(size),
                    material
                );
                colliderDesc = RAPIER.ColliderDesc.ball(size);
                break;
            case 'Pyramid':
                mesh = new THREE.Mesh(
                    new THREE.TetrahedronGeometry(size),
                    material
                );
                const points = new Float32Array(mesh.geometry.attributes.position.array);
                colliderDesc = RAPIER.ColliderDesc.convexHull(points);
                break;
            case 'Cube':
                mesh = new THREE.Mesh(
                    new THREE.BoxGeometry(size, size, size),
                    material
                );
                colliderDesc = RAPIER.ColliderDesc.cuboid(size/2, size/2, size/2);
                break;
        }

        mesh.position.copy(position);
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        let velocity;
        if (velocities.length == 0) {
            velocity = direction.clone().multiplyScalar(GLOBALS.launchVelocityFactor);
        }
        else {
            velocity = {x: 0, y: 0, z: 0};
        }
        const rigidBody = world.createRigidBody(
            RAPIER.RigidBodyDesc.dynamic()
            .setTranslation(position.x, position.y, position.z)
            .setLinvel(velocity.x, velocity.y, velocity.z)
            .setLinearDamping(guiOptions.linearDamping)
            .setAngularDamping(guiOptions.angularDamping)
            .setCanSleep(false)
            .setCcdEnabled(true)
        );
        if (velocities.length > 0) {
            rigidBody.lockTranslations(true);
            rigidBody.lockRotations(true);
        }

        colliderDesc.setDensity(GLOBALS.object.density)
            .setRestitution(GLOBALS.object.restitution)
            .setRestitutionCombineRule(RAPIER.CoefficientCombineRule.Max)
            .setFriction(GLOBALS.object.friction)
            .setFrictionCombineRule(RAPIER.CoefficientCombineRule.Min)
            .setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS);
        const collider = world.createCollider(colliderDesc, rigidBody);
        
        objects.set(collider.handle, [mesh, rigidBody, shape, guiOptions.size, color]);
        if (velocities.length > 0) {
            velocities.push([0, 0, 0]);
        }

        scene.add(mesh);
        intersectables.push(mesh);
    }
}

function dispose(object) {
    const threeMesh = object[0];
    const rapierBody = object[1];
    threeMesh.geometry.dispose();
    threeMesh.material.dispose();
    threeMesh.removeFromParent();
    world.removeRigidBody(rapierBody);
}

function destroyObject(key) {
    const value = objects.get(key);
    dispose(value);
    objects.delete(key);
}

function destroyObjects() {
    for (let [key, value] of objects) {
        if (value) {
            dispose(value);
            objects.delete(key);
        }
    }
    velocities = [];
}

function pauseResume() {
    if (velocities.length == 0) {
        for (let [key, value] of objects) {
            if (value) {
                const vel = value[1].linvel();
                velocities.push([vel.x, vel.y, vel.z]);
                value[1].setLinvel({x: 0, y: 0, z: 0}, true);
                value[1].lockTranslations(true);
                value[1].lockRotations(true);
            }
        }
        console.log('paused');
    }
    else {
        for (let [key, value] of objects) {
            if (value) {
                const vel = velocities.shift();
                value[1].setLinvel({x: vel[0], y: vel[1], z: vel[2]}, true);
                value[1].lockTranslations(false);
                value[1].lockRotations(false);
            }
        }
        velocities = [];
        console.log('resumed');
    }
}

function createGUI() {
    const gui = new GUI();
    guiOptions = {
        shape: 'Sphere',
        size: GLOBALS.object.sizeDefault,
        color: 0x000000,
        linearDamping: 0.0,
        angularDamping: 0.0,
        gravity: 'Normal',
        root: GLOBALS.sound.rootDefault,
        scale: GLOBALS.sound.scaleDefault,
        resetCamera: function() {
            camera.position.z = GLOBALS.boxDimensions.z/2;
            camera.position.y = GLOBALS.boxDimensions.y/2 + 1;
            controls.reset();
            controls.target.y = 1.6;
        },
        resetObjects: function() { destroyObjects(); }
    
    };
    const objectFolder = gui.addFolder('Object');
    const physicsFolder = gui.addFolder('Physics');
    const soundFolder = gui.addFolder('Sound');
    objectFolder.add(guiOptions, 'shape', ['Sphere', 'Pyramid', 'Cube']);
    objectFolder.add(guiOptions, 'size', GLOBALS.object.sizeLow, GLOBALS.object.sizeHigh, 1);
    objectFolder.addColor(guiOptions, 'color');
    physicsFolder.add(guiOptions, 'linearDamping', 0.0, 1, 0.01).onFinishChange( val => {
        for (let [key, value] of objects) {
            if (value) {
                value[1].setLinearDamping(val);
            }
        }
    });
    physicsFolder.add(guiOptions, 'angularDamping', 0.0, 1, 0.01).onFinishChange( val => {
        for (let [key, value] of objects) {
            if (value) {
                value[1].setAngularDamping(val);
            }
        }
    });
    physicsFolder.add(guiOptions, 'gravity', ['Normal', 'Off', 'Reverse']).onChange( val => {
        switch (val) {
            case 'Normal':
                world.gravity.y = -9.8;
                break;
            case 'Off':
                world.gravity.y = 0;
                break;
            case 'Reverse':
                world.gravity.y = 9.8;
                break;
        }
    } );
    soundFolder.add(guiOptions, 'root', GLOBALS.sound.chromaticScale).onFinishChange( val => {
        sound.changeScale(val, guiOptions.scale);
    });
    soundFolder.add(guiOptions, 'scale', Array.from(Object.keys(GLOBALS.sound.sets))).onFinishChange( val => {
        sound.changeScale(guiOptions.root, val);
    });
    gui.add(guiOptions, 'resetCamera');
    gui.add(guiOptions, 'resetObjects');
}

function init() {
    
    clock = new THREE.Clock();

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.VSMSoftShadowMap;
    renderer.setAnimationLoop(animate);
    document.body.appendChild(renderer.domElement);

    gravity = new RAPIER.Vector3(0.0, -9.8, 0.0);
    world = new RAPIER.World(gravity);
    objects = new Map();
    velocities = [];
    eventQueue = new RAPIER.EventQueue(true);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = GLOBALS.boxDimensions.z/2;
    camera.position.y = GLOBALS.boxDimensions.y/2 + 1;

    stats = new Stats();
    document.body.appendChild(stats.dom);

    createGUI();

    controls = new OrbitControls(camera, renderer.domElement);
    controls.saveState();
    controls.enableDamping = true;
    controls.maxDistance = 10;
    controls.target.y = 1.6;
    
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    mouseDownTime = performance.now();

    renderer.domElement.addEventListener('mousedown', (e) => {
        if (e.button == 0) mouseDownTime = performance.now();
    });

    renderer.domElement.addEventListener('mouseup', (e) => {
        if (e.button == 0 && performance.now() - mouseDownTime < GLOBALS.mouseClickMS) {
            mouse.set((e.clientX / renderer.domElement.clientWidth) * 2 - 1, -(e.clientY / renderer.domElement.clientHeight) * 2 + 1);

            raycaster.setFromCamera(mouse, camera);

            const intersects = raycaster.intersectObjects(intersectables, false);

            if (intersects.length) {
                for (let i of intersects) {
                    for (let [key, value] of objects) {
                        if (value && value[0].id == i.object.id) {
                            destroyObject(key);
                            return;
                        }
                    }
                }
                const intersection = intersects.pop();
                const point = intersection.point.clone();
                const direction = raycaster.ray.direction.clone();
                launchObject(point, direction);
            }
        }
    });

    window.addEventListener('keyup', (e) => {
        if (e.key == ' ' || e.code == "Space") {
            e.preventDefault();
            pauseResume();
        }
    });

    createScene();
}

function animate() {

    world.timestep = clock.getDelta();
	world.step(eventQueue);

    for (let [key, value] of objects) {
        if (value) {
            value[0].position.copy(value[1].translation());
            value[0].quaternion.copy(value[1].rotation());
        }
    }

    eventQueue.drainCollisionEvents((handle1, handle2, started) => {
        if (started) {
            const object1 = objects.get(handle1);
            const object2 = objects.get(handle2);
            if (object1) {
                const shape = object1[2];
                const size = object1[3];
                const color = object1[4];
                const pos = object1[0].position;
                // console.log(`${shape}, ${size}, ${color}`);
                sound.beep(shape, size, color, pos);
            }
            if (object2) {
                const shape = object2[2];
                const size = object2[3];
                const color = object2[4];
                const pos = object2[0].position;
                // console.log(`${shape}, ${size}, ${color}`);
                sound.beep(shape, size, color, pos);
            }
        }
    
    });

    controls.update();

    renderer.render(scene, camera);
    
    stats.update();

}