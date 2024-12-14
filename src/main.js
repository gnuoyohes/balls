import './style.css'
import globals from './globals.js'
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { BoxLineGeometry } from 'three/addons/geometries/BoxLineGeometry.js';
import Stats from 'three/addons/libs/stats.module.js'
import { GUI } from 'three/addons/libs/lil-gui.module.min.js'
import RAPIER from '@dimforge/rapier3d-compat';

// THREE
let scene, camera, controls, renderer;
let clock;
let stats, guiOptions;
let planes;

// RAPIER
let gravity, world;
let dynamicBodies;

await RAPIER.init();
init();

function createScene() {

    function createWall(pX, pY, pZ, rX, rY, rZ, shadow=false) {
        const d = globals.boxDimensions;
        const wall = new THREE.Mesh(
            new THREE.BoxGeometry(d.x+0.1, globals.wallThickness, d.z+0.1),
            new THREE.ShadowMaterial({ color: globals.wallColor })
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
        const wallShape = RAPIER.ColliderDesc.cuboid(d.x/2, globals.wallThickness/2, d.z/2);
        world.createCollider(wallShape, wallBody);
    }

    scene = new THREE.Scene();
    scene.background = new THREE.Color( globals.backgroundColor );

    // lights
    const fillLight = new THREE.HemisphereLight( globals.lightColor, 0x00668d, 1.5 );
    scene.add( fillLight );

    const directionalLight = new THREE.DirectionalLight( globals.lightColor, 2.5 );
    directionalLight.position.set( 0, globals.boxDimensions.x, 0 );
    directionalLight.castShadow = true;
    // directionalLight.shadow.blurSamples = 10;
    // directionalLight.shadow.radius = 5;
    directionalLight.shadow.mapSize.x = globals.lightShadowMapSize;
    directionalLight.shadow.mapSize.y = globals.lightShadowMapSize;
    scene.add( directionalLight );
    // const helper2 = new THREE.DirectionalLightHelper( directionalLight, 1 );
    // scene.add( helper2 );

    // room grid
    const room = new THREE.LineSegments(
        new BoxLineGeometry( globals.boxDimensions.x, globals.boxDimensions.y, globals.boxDimensions.z, 10, 10, 10 ),
        new THREE.LineBasicMaterial( { color: globals.wallColor } )
    );
    room.geometry.translate( 0, globals.boxDimensions.x/2, 0 );
    scene.add( room );

    // walls
    const x = globals.boxDimensions.x;
    const t = globals.wallThickness/2;
    createWall(0, -1*t, 0, 0, 0, 0, true); // floor
    createWall(0, x+t, 0, 0, 0, 0); // ceiling
    createWall(0, x/2, -1*(x/2+t), Math.PI/2, 0, 0); // north
    createWall(0, x/2, x/2+t, Math.PI/2, 0, 0); // south
    createWall(x/2+t, x/2, 0, Math.PI/2, 0, Math.PI/2); // east
    createWall(-1*(x/2+t), x/2, 0, Math.PI/2, 0, Math.PI/2); // west

    // invisible planes
    planes = []
    const plane = new THREE.Mesh(
        new THREE.BoxGeometry(globals.boxDimensions.x, 0.01, globals.boxDimensions.z),
        new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.0 })
    );
    plane.position.set(0, 3, 0);
    plane.rotation.set(0, 0, 0);
    scene.add(plane);
    planes.push(plane);

    const plane2 = plane.clone();
    plane2.position.set(0, 3, 0);
    plane2.rotation.set(Math.PI/2, 0, 0);
    scene.add(plane2);
    planes.push(plane2);

    const plane3 = plane.clone();
    plane3.position.set(0, 3, 0);
    plane3.rotation.set(0, 0, Math.PI/2);
    scene.add(plane3);
    planes.push(plane3);

}

function launchObject(position, direction) {
    if (guiOptions.shape != 'None') {
        let mesh, collider;
        const material = new THREE.MeshPhongMaterial({ color: guiOptions.color });
        const size = guiOptions.size;

        switch(guiOptions.shape) {
            case 'Sphere':
                mesh = new THREE.Mesh(
                    new THREE.SphereGeometry(size),
                    material
                );
                collider = RAPIER.ColliderDesc.ball(size);
                break;
            case 'Pyramid':
                mesh = new THREE.Mesh(
                    new THREE.TetrahedronGeometry(size),
                    material
                );
                const points = new Float32Array(mesh.geometry.attributes.position.array);
                console.log(points);
                collider = RAPIER.ColliderDesc.convexHull(points);
                break;
            case 'Cube':
                mesh = new THREE.Mesh(
                    new THREE.BoxGeometry(size, size, size),
                    material
                );
                collider = RAPIER.ColliderDesc.cuboid(size/2, size/2, size/2);
                break;
        }

        mesh.position.copy(position);
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        const velocity = direction.clone().multiplyScalar(globals.launchVelocityFactor);
        const rigidBody = world.createRigidBody(
            RAPIER.RigidBodyDesc.dynamic()
            .setTranslation(position.x, position.y, position.z)
            .setLinvel(velocity.x, velocity.y, velocity.z)
            .setCcdEnabled(true)
        );

        collider.setDensity(globals.objectDensity)
            .setRestitution(globals.objectRestitution)
            .setRestitutionCombineRule(RAPIER.CoefficientCombineRule.Max)
            .setFriction(globals.objectFriction)
            .setFrictionCombineRule(RAPIER.CoefficientCombineRule.Min);
        world.createCollider(collider, rigidBody);
        dynamicBodies.push([mesh, rigidBody]);

        scene.add(mesh);
    }
}

function destroyObjects() {
    while (dynamicBodies.length > 0) {
        const db = dynamicBodies.pop();
        const threeMesh = db[0];
        const rapierBody = db[1];
        threeMesh.geometry.dispose();
        threeMesh.material.dispose();
        threeMesh.removeFromParent();
        world.removeRigidBody(rapierBody);
    }
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
    dynamicBodies = [];

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 3;
    camera.position.y = 3;

    stats = new Stats();
    document.body.appendChild(stats.dom);

    const gui = new GUI();
    guiOptions = {
        shape: 'None',
        size: 0.3,
        color: 0x000000,
        gravity: true,
        reset: function() { destroyObjects(); }
    };
    gui.add(guiOptions, 'shape', ['None', 'Sphere', 'Pyramid', 'Cube']);
    gui.add(guiOptions, 'size', 0.1, 1, 0.01);
    gui.addColor(guiOptions, 'color');
    gui.add(guiOptions, 'gravity' ).onChange( value => {
        if (value) {
            world.gravity.y = -9.8;
        }
        else {
            world.gravity.y = 0;
        }
    } );
    gui.add(guiOptions, 'reset');

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.maxDistance = 10;
    controls.target.y = 1.6;
    
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    renderer.domElement.addEventListener('click', (e) => {
        mouse.set((e.clientX / renderer.domElement.clientWidth) * 2 - 1, -(e.clientY / renderer.domElement.clientHeight) * 2 + 1);

        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObjects(planes, false);

        if (intersects.length) {
            const furthest = intersects.pop();
            const point = furthest.point.clone();
            const direction = raycaster.ray.direction.clone();
            launchObject(point, direction);
        }
    })

    createScene();
}

function animate() {

    world.timestep = clock.getDelta();
	world.step();

    for (let i = 0; i < dynamicBodies.length; i++) {
        dynamicBodies[i][0].position.copy(dynamicBodies[i][1].translation());
        dynamicBodies[i][0].quaternion.copy(dynamicBodies[i][1].rotation());
    }

    controls.update();

    renderer.render(scene, camera);
    
    stats.update();

}