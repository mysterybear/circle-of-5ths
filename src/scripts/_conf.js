var sndpath = 'sounds/',
    ext = '.ogg';

exports.MUS_KEYS = {
   'A'     : ['A', 'B', ['C', '#'], 'D', 'E', ['F', '#'], ['G', '#']],
   'E'     : ['E', ['F', '#'], ['G', '#'], 'A', 'B', ['C', '#'], ['D', '#']],
   'B'     : ['B', ['C', '#'], ['D', '#'], 'E', ['F', '#'], ['G', '#'], ['A', '#']],
   'Fshrp' : [['F', '#'], ['G', '#'], ['A', '#'], 'B', ['C', '#'], ['D', '#'], ['E', '#']],
   'Db'    : [['D', 'b'], ['E', 'b'], 'F', ['G', 'b'], ['A', 'b'], ['B', 'b'], 'C'],
   'Ab'    : [['A', 'b'], ['B', 'b'], 'C', ['D', 'b'], ['E', 'b'], 'F', 'G'],
   'Eb'    : [['E', 'b'], 'F', 'G', ['A', 'b'], ['B', 'b'], 'C', 'D'],
   'Bb'    : [['B', 'b'], 'C', 'D', ['E', 'b'], 'F', 'G', 'A'],
   'F'     : ['F', 'G', 'A', ['B', 'b'], 'C', 'D', 'E'],
   'C'     : ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
   'G'     : ['G', 'A', 'B', 'C', 'D', 'E', ['F', '#']],
   'D'     : ['D', 'E', ['F', '#'], 'G', 'A', 'B', ['C', '#']]
};

exports.SOUND_MAP = {
   'C2'  : sndpath + 'C2' + ext,
   'C#2' : sndpath + 'Cshrp2' + ext,
   'D2'  : sndpath + 'D2' + ext,
   'D#2' : sndpath + 'Dshrp2' + ext,
   'E2'  : sndpath + 'E2' + ext,
   'F2'  : sndpath + 'F2' + ext,
   'F#2' : sndpath + 'Fshrp2' + ext,
   'G2'  : sndpath + 'G2' + ext,
   'G#2' : sndpath + 'Gshrp2' + ext,
   'A2'  : sndpath + 'A2' + ext,
   'A#2' : sndpath + 'Ashrp2' + ext,
   'B2'  : sndpath + 'B2' + ext,
   'C3'  : sndpath + 'C3' + ext,
   'C#3' : sndpath + 'Cshrp3' + ext,
   'D3'  : sndpath + 'D3' + ext,
   'D#3' : sndpath + 'Dshrp3' + ext,
   'E3'  : sndpath + 'E3' + ext,
   'F3'  : sndpath + 'F3' + ext,
   'F#3' : sndpath + 'Fshrp3' + ext,
   'G3'  : sndpath + 'G3' + ext,
   'G#3' : sndpath + 'Gshrp3' + ext,
   'A3'  : sndpath + 'A3' + ext,
   'A#3' : sndpath + 'Ashrp3' + ext,
   'B3'  : sndpath + 'B3' + ext,
   'C4'  : sndpath + 'C4' + ext,
   'C#4' : sndpath + 'Cshrp4' + ext,
   'D4'  : sndpath + 'D4' + ext,
   'D#4' : sndpath + 'Dshrp4' + ext,
   'E4'  : sndpath + 'E4' + ext,
   'F4'  : sndpath + 'F4' + ext,
   'F#4' : sndpath + 'Fshrp4' + ext,
   'G4'  : sndpath + 'G4' + ext,
   'G#4' : sndpath + 'Gshrp4' + ext,
   'A4'  : sndpath + 'A4' + ext,
   'A#4' : sndpath + 'Ashrp4' + ext,
   'B4'  : sndpath + 'B4' + ext
};

exports.CIRCLE_MAP = {
   'C':     ['C2', 'D2', 'E2', 'F2', 'G2', 'A2', 'B2', 'C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3'],
   'G':     ['G2', 'A2', 'B2', 'C3', 'D3', 'E3', 'F#3', 'G3', 'A3', 'B3', 'C4', 'D4', 'E4', 'F#4'],
   'D':     ['D2', 'E2', 'F#2', 'G2', 'A2', 'B2', 'C#3', 'D3', 'E3', 'F#3', 'G3', 'A3', 'B3', 'C#4'],
   'A':     ['A2', 'B2', 'C#3', 'D3', 'E3', 'F#3', 'G#3', 'A3', 'B3', 'C#4', 'D4', 'E4', 'F#4', 'G#4'],
   'E':     ['E2', 'F#2', 'G#2', 'A2', 'B2', 'C#3', 'D#3', 'E3', 'F#3', 'G#3', 'A3', 'B3', 'C#4', 'D#4'],
   'B':     ['B2', 'C#3', 'D#3', 'E3', 'F#3', 'G#3', 'A#3', 'B3', 'C#4', 'D#4', 'E4', 'F#4', 'G#4', 'A#4'],
   'Fshrp': ['F#2', 'G#2', 'A#2', 'B2', 'C#3', 'D#3', 'F3', 'F#3', 'G#3', 'A#3', 'B3', 'C#4', 'D#4', 'F4'],
   'Db':    ['C#2', 'D#2', 'F2', 'F#2', 'G#2', 'A#2', 'C3', 'C#3', 'D#3', 'F3', 'F#3', 'G#3', 'A#3', 'C4'],
   'Ab':    ['G#2', 'A#2', 'C3', 'C#3', 'D#3', 'F3', 'G3', 'G#3', 'A#3', 'C4', 'C#4', 'D#4', 'F4', 'G4'],
   'Eb':    ['D#2', 'F2', 'G2', 'G#2', 'A#2', 'C3', 'D3', 'D#3', 'F3', 'G3', 'G#3', 'A#3', 'C4', 'D4'],
   'Bb':    ['A#2', 'C3', 'D3', 'D#3', 'F3', 'G3', 'A3', 'A#3', 'C4', 'D4', 'D#4', 'F4', 'G4', 'A4'],
   'F':     ['F2', 'G2', 'A2', 'A#2', 'C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'A#3', 'C4', 'D4', 'E4']
};
