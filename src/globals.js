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
        chromaticScale: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
        octaveLow: 2,
        octaveHigh: 7,
        volLow: -12,
        volHigh: 0,
        rootDefault: "D",
        scaleDefault: "pentatonic",
        sets: {
            diatonicMajor: [0, 2, 4, 5, 7, 9, 11],
            diatonicMinor: [0, 2, 3, 5, 7, 8, 10],
            chromatic: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            pentatonic: [0, 2, 4, 7, 9],
            bluesMinor: [0, 3, 5, 6, 7, 10],
            bluesMajor: [0, 2, 3, 4, 7, 9],
            octatonic1: [0, 1, 3, 4, 6, 7, 9, 10],
            octatonic2: [0, 2, 3, 5, 6, 8, 9, 11],
            wholeTone: [0, 2, 4, 6, 8, 10]
        }
    }
}

export default GLOBALS