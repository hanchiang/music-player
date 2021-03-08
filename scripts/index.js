
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
const DOTTED_QUAVER = 1.5 * QUAVER;
const SEMIQUAVER = CROTCHET / 4;
const TRIPLET_QUAVER = CROTCHET / 3;  // 3 beats in the time of 2 quavers
const TRIPLET_CROTCHET = MINIM / 3;   // 3 beats in the time of 2 crotchets


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

// some people live for the power
playSynth('', CROTCHET + QUAVER);
playSynth('B3', QUAVER + TRIPLET_QUAVER);
playSynth('D4', QUAVER);
playSynth('E4', QUAVER);
playSynth('D4', MINIM);
playSynth('B3', QUAVER);
playSynth('D4', QUAVER);
playSynth('F4', CROTCHET + QUAVER);
playSynth('E4', MINIM);
playSynth('D4', MINIM + QUAVER);

// TODO: sounds a little high/weird??
// some people live just to play the game
playSynth('', CROTCHET);
playSynth('G4', CROTCHET);
playSynth('E4', QUAVER);
playSynth('D4', QUAVER);
playSynth('G4', CROTCHET);
playSynth('G4', QUAVER);
playSynth('E4', QUAVER);
playSynth('G4', QUAVER);
playSynth('E4', QUAVER);
playSynth('B4', QUAVER);
playSynth('A4', MINIM + QUAVER);

// some people think that the physical things define what's within
playSynth('', SEMIBREVE);
playSynth('B3', MINIM + TRIPLET_QUAVER);
playSynth('A3', TRIPLET_QUAVER);
playSynth('B3', TRIPLET_QUAVER);
playSynth('C4', MINIM);

playSynth('', TRIPLET_QUAVER);
playSynth('B3', TRIPLET_QUAVER);
playSynth('C4', TRIPLET_QUAVER);
playSynth('D4', CROTCHET);
playSynth('D4', CROTCHET);
playSynth('D4', CROTCHET);
playSynth('C4', MINIM);

playSynth('D4', CROTCHET);
playSynth('B3', MINIM + CROTCHET);
playSynth('C4', MINIM);
playSynth('C4', CROTCHET);
playSynth('D4', MINIM + CROTCHET + CROTCHET);

// and I've been there before
playSynth('D4', MINIM);
playSynth('B3', MINIM);
playSynth('', TRIPLET_QUAVER);
playSynth('A3', TRIPLET_QUAVER);
playSynth('B3', TRIPLET_QUAVER);
playSynth('C4', MINIM);
playSynth('', CROTCHET);

// that life's a bore, so full of the superficial
playSynth('D4', CROTCHET);
playSynth('D4', CROTCHET);
playSynth('D4', CROTCHET);
playSynth('C4', CROTCHET);
playSynth('', CROTCHET);
playSynth('D4', CROTCHET);
playSynth('B3', MINIM);
playSynth('', TRIPLET_QUAVER);
playSynth('A3', TRIPLET_QUAVER);
playSynth('B3', TRIPLET_QUAVER);
playSynth('C4', CROTCHET);
playSynth('B3', CROTCHET);
playSynth('C4', CROTCHET);
playSynth('D4', MINIM);
playSynth('', CROTCHET);

// TODO: Instrument sounds so bleak :O
// some people want it all, but I don't want nothing at all
playSynth('G4', CROTCHET);
playSynth('A4', CROTCHET);
playSynth('B4', CROTCHET);
playSynth('B4', QUAVER + SEMIQUAVER);
playSynth('B4', SEMIQUAVER);
playSynth('B4', CROTCHET);
playSynth('', QUAVER);
playSynth('G4', QUAVER);
playSynth('B4', CROTCHET);
playSynth('D5', CROTCHET);
playSynth('', QUAVER);
playSynth('G4', QUAVER);
playSynth('G4', TRIPLET_QUAVER);
playSynth('A4', TRIPLET_QUAVER);
playSynth('B4', TRIPLET_QUAVER);
playSynth('B4', MINIM);

// if it ain't you baby, if I ain't got chu baby
playSynth('', QUAVER);
playSynth('D4', QUAVER);
playSynth('B4', CROTCHET);
playSynth('B4', CROTCHET);
playSynth('A4', CROTCHET);
playSynth('G4', CROTCHET);
playSynth('E4', CROTCHET);
playSynth('', QUAVER);
playSynth('D4', QUAVER);
playSynth('B4', QUAVER);
playSynth('B4', QUAVER);
playSynth('B4', CROTCHET);
playSynth('A4', CROTCHET);
playSynth('G4', CROTCHET);
playSynth('E4', CROTCHET);

// some people want diamonds, some just want everything
playSynth('G4', CROTCHET);
playSynth('A4', CROTCHET);
playSynth('B4', CROTCHET);
playSynth('B4', DOTTED_QUAVER);
playSynth('B4', SEMIQUAVER);
playSynth('B4', CROTCHET);
playSynth('', CROTCHET);
playSynth('B4', CROTCHET);
playSynth('D5', CROTCHET);
playSynth('', QUAVER);
playSynth('G4', QUAVER);
playSynth('G4', TRIPLET_QUAVER);
playSynth('A4', TRIPLET_QUAVER);
playSynth('B4', TRIPLET_QUAVER);
playSynth('B4', CROTCHET);
playSynth('', QUAVER);

// but everything means nothing, if I ain't got chu
playSynth('G4', QUAVER);
playSynth('B4', DOTTED_QUAVER);
playSynth('B4', SEMIQUAVER);
playSynth('B4', CROTCHET);
playSynth('A4', CROTCHET);
playSynth('A4', CROTCHET);
playSynth('G4', CROTCHET);
playSynth('', QUAVER);
playSynth('D4', QUAVER);
playSynth('E4', CROTCHET);
playSynth('G4', CROTCHET);
playSynth('A4', CROTCHET);
playSynth('D5', QUAVER);
playSynth('B4', MINIM);


// attach a click listener to a play button
document.querySelector('#play-btn').addEventListener('click', () => Tone.context.resume());
document.querySelector('#pause-btn').addEventListener('click', () => Tone.context.suspend());
document.querySelector('#stop-btn').addEventListener('click', () => {
  Tone.Transport.stop();
});