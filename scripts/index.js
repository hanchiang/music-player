
const BPM = 118;
Tone.Transport.bpm.value = BPM;


// create a synth and connect it to the master output (your speakers)
const synth = new Tone.Synth().toMaster();


// e.g. 4/4 time signature, bpm = 60
// 1 bar = 4 / 1bps = 4 sec. crotchet = 4 / 4 = 1 sec, quaver = 4 / 8 = 0.5sec

// e.g. 4/4 time signature, bpm = 120
// 1 bar = 4 / 2bps = 2 sec. crotchet = 2 / 4 = 0.5 sec, quaver = 2 / 8 = 0.25sec

const TIME_SIGNATURE = 3; // 3/4 time signature
const TIME_PER_BAR = TIME_SIGNATURE / (BPM / 60);

// Take reference from crotchet
const CROTCHET = TIME_PER_BAR / TIME_SIGNATURE;

const SEMIBREVE = CROTCHET * 4;
const MINIM = CROTCHET * 2;
const QUAVER = CROTCHET / 2;
const SEMIQUAVER = CROTCHET / 4;
const TRIPLET_QUAVER = CROTCHET / 3;
const TRIPLET_CROTCHET = MINIM / 3;


let sofar = 0;

function playSynth(note, duration) {
  synth.triggerAttackRelease(note, duration, sofar);
  sofar += duration;
}

// If I ain't got you: https://www.youtube.com/watch?v=Ju8Hr50Ckwk

// some people live for the fortune
playSynth('', CROTCHET + QUAVER);
playSynth('B3', QUAVER + TRIPLET_QUAVER);
playSynth('D4', TRIPLET_QUAVER);
playSynth('E4', TRIPLET_QUAVER);
playSynth('D4', MINIM);
playSynth('B3', QUAVER);
playSynth('G3', QUAVER);
playSynth('A3', CROTCHET);
playSynth('G3', 5 * CROTCHET);

// some people live just for the fame
playSynth('', CROTCHET);
playSynth('G4', CROTCHET + TRIPLET_QUAVER);
playSynth('E4', TRIPLET_QUAVER);
playSynth('D4', TRIPLET_QUAVER);
playSynth('B3', CROTCHET);
playSynth('D4', CROTCHET);
playSynth('', TRIPLET_QUAVER);
playSynth('E4', TRIPLET_QUAVER);
playSynth('D4', TRIPLET_QUAVER);
playSynth('F4', TRIPLET_QUAVER);
playSynth('E4', TRIPLET_QUAVER);
playSynth('D4', TRIPLET_QUAVER + 5 * CROTCHET);


// attach a click listener to a play button
document.querySelector('#play-btn').addEventListener('click', () => Tone.context.resume());
document.querySelector('#pause-btn').addEventListener('click', () => Tone.context.suspend());
document.querySelector('#stop-btn').addEventListener('click', () => {
  Tone.Transport.stop();
});