import * as Tone from "tone";
import GLOBALS from './globals.js'

let root = GLOBALS.sound.rootDefault;
let scale = [];

let initialized = false;
let reverb, synths;

function initialize() {
    document.addEventListener("click", async () => {
        if (!initialized){
            await Tone.start();
            console.log("audio is ready");
            initialized = true;
        }
    });

    for (let e of GLOBALS.sound.sets[GLOBALS.sound.scaleDefault]) {
        const rootDegree = GLOBALS.sound.chromaticScale.indexOf(root);
        const index = (rootDegree + e) % 12;
        scale.push(GLOBALS.sound.chromaticScale[index]);
    }
    
    reverb = new Tone.Reverb({
        decay: 0.8,
        preDelay: 0.01,
        wet: 0.8
    }).toDestination();
    
    // initialize synths
    
    synths = [];
    
    for (let pan=-1; pan<=1; pan+=0.2) {
        let synthsTemp = [];
        for (let vol=GLOBALS.sound.volLow; vol<=GLOBALS.sound.volHigh; vol++) {
            const panVol = new Tone.PanVol(pan, vol).connect(reverb);
            const synth = new Tone.MonoSynth({
                oscillator: {
                    type: "sine"
                },
                envelope: {
                    attack: 0.1,
                    decay: 0.1,
                    sustain: 0.1,
                    release: 0.1,
                }
            }).connect(panVol);

            synthsTemp.push(synth);
        }
        synths.push(synthsTemp);
    }
    console.log(synths);
}

function getVolume(size) {
    return GLOBALS.sound.volLow + (size - GLOBALS.object.sizeLow)
    /(GLOBALS.object.sizeHigh - GLOBALS.object.sizeLow)
    * (GLOBALS.sound.volHigh - GLOBALS.sound.volLow);
}

function getNote(position) {
    const y = position.y, z = position.z;
    const octave = GLOBALS.sound.octaveLow
        + Math.round(y / GLOBALS.boxDimensions.y * (GLOBALS.sound.octaveHigh - GLOBALS.sound.octaveLow));
    const noteIndex = Math.floor((-1*z + GLOBALS.boxDimensions.z/2)/GLOBALS.boxDimensions.z * scale.length);
    return scale[noteIndex] + octave;
}

export function changeScale(newRoot, newScale) {
    root = newRoot;
    scale = [];
    for (let e of GLOBALS.sound.sets[newScale]) {
        const rootDegree = GLOBALS.sound.chromaticScale.indexOf(root);
        const index = (rootDegree + e) % 12;
        scale.push(GLOBALS.sound.chromaticScale[index]);
    }
}

export function beep(shape, size, color, position) {
    const volume = Math.round(getVolume(size));
    const note = getNote(position);

    const x = position.x;
    const panIndex = Math.floor((x + GLOBALS.boxDimensions.x/2) / GLOBALS.boxDimensions.x * synths.length);
    const volumeIndex = volume - GLOBALS.sound.volLow;
    const synth = synths[panIndex][volumeIndex];

    switch (shape) {
        case 'Sphere':
            synth.oscillator.type = 'sine';
            break;
        case 'Pyramid':
            synth.oscillator.type = 'sawtooth';
            break;
        case 'Cube':
            synth.oscillator.type = 'square';
            break;
    }
    synth.triggerAttackRelease(note, 0.08);
}

initialize();