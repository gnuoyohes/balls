const GLOBALS = {
    mouseClickMS: 200,
    backgroundColor: 0xeeeeee,
    wallColor: 0xdddddd,
    lightColor: 0xffffff,
    lightShadowMapSize: 2048,
    boxDimensions: { x: 6.0, y: 6.0, z: 6.0 },
    wallThickness: 0.2,
    launchVelocityFactor: 3,
    object: {
        restitution: 1,
        density: 1,
        friction: 0,
        sizeLow: 1,
        sizeHigh: 6,
        sizeDefault: 3,
        sizeScale: 1 / 6.0
    },
    sound: {
        octaveLow: 2,
        octaveHigh: 7,
        volLow: -18,
        volHigh: -4,
    }
};

export default GLOBALS;