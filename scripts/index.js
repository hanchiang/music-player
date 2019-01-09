

// create a synth and connect it to the master output (your speakers)
const synth = new Tone.Synth().toMaster();

const BPM = 118;
Tone.Transport.bpm.value = BPM;


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

function synthSound(note, duration) {
  synth.triggerAttackRelease(note, duration, sofar);
  sofar += duration;
}

// If I ain't got you: https://www.youtube.com/watch?v=Ju8Hr50Ckwk

// some people live for the fortune
synthSound('', CROTCHET + QUAVER);
synthSound('B3', QUAVER + TRIPLET_QUAVER);
synthSound('D4', TRIPLET_QUAVER);
synthSound('E4', TRIPLET_QUAVER);
synthSound('D4', MINIM);
synthSound('B3', QUAVER);
synthSound('G3', QUAVER);
synthSound('A3', CROTCHET);
synthSound('G3', 5 * CROTCHET);

// some people live just for the fame
synthSound('', CROTCHET);
synthSound('G4', CROTCHET + TRIPLET_QUAVER);
synthSound('E4', TRIPLET_QUAVER);
synthSound('D4', TRIPLET_QUAVER);
synthSound('B3', CROTCHET);
synthSound('D4', CROTCHET);
synthSound('', TRIPLET_QUAVER);
synthSound('E4', TRIPLET_QUAVER);
synthSound('D4', TRIPLET_QUAVER);
synthSound('F4', TRIPLET_QUAVER);
synthSound('E4', TRIPLET_QUAVER);
synthSound('D4', TRIPLET_QUAVER + 5 * CROTCHET);

// attach a click listener to a play button
document.querySelector('#play-btn').addEventListener('click', () => Tone.context.start());
