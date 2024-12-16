import * as Tone from "tone";
import GLOBALS from './globals.js'

const chromaticScale = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
const sets = {
    pentatonic: [0, 2, 4, 7, 9]
};
const root = "D";

let initialized = false;

document.addEventListener("click", async () => {
    if (!initialized){
        await Tone.start();
	    console.log("audio is ready");
        initialized = true;
    }
});

const reverb = new Tone.Reverb({
    decay: 0.8,
    preDelay: 0.01,
    wet: 0.8
}).toDestination();

let synths = [];

for (let i=0; i<GLOBALS.sound.nSynths; i++) {
    const pan = -1 + i * 2.0 / (GLOBALS.sound.nSynths - 1);
    const panVol = new Tone.PanVol(pan, 0).connect(reverb);
    const sineSynth = new Tone.MonoSynth({
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

    synths.push(sineSynth);
}

function getVolume(size) {
    return GLOBALS.sound.volLow + (size - GLOBALS.object.sizeLow)
    /(GLOBALS.object.sizeHigh - GLOBALS.object.sizeLow)
    * (GLOBALS.sound.volHigh - GLOBALS.sound.volLow);
}

function getNote(position, scale) {
    const y = position.y, z = position.z;
    const octave = GLOBALS.sound.octaveLow
        + Math.round(y / GLOBALS.boxDimensions.y * (GLOBALS.sound.octaveHigh - GLOBALS.sound.octaveLow));
    const noteIndex = Math.floor((-1*z + GLOBALS.boxDimensions.z/2)/GLOBALS.boxDimensions.z * scale.length);
    return scale[noteIndex] + octave;
}

export function beep(shape, size, color, position) {
    const scale = [];
    for (let e of sets.pentatonic) {
        const rootDegree = chromaticScale.indexOf(root);
        const index = (rootDegree + e) % 12;
        scale.push(chromaticScale[index]);
    }
    const volume = getVolume(size);
    const note = getNote(position, scale);

    const x = position.x;
    const synthIndex = Math.floor((x + GLOBALS.boxDimensions.x/2) / GLOBALS.boxDimensions.x * GLOBALS.sound.nSynths);
    console.log(synthIndex);
    const synth = synths[synthIndex];

    switch (shape) {
        case 'Sphere':
            synth.volume.value = volume;
            synth.triggerAttackRelease(note, "8n");
            break;
    }
}