var notes = ["A", "Bb", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
var key = undefined;
var string = undefined;
var fst = undefined;
var snd = undefined;
var thrd = undefined;
var frth = undefined;

function playmusic() {
    var audio = new Audio('untzuntz.mp3');
    audio.play();
    tonart("D");
}

function tonart(string) {
    for (i = 0; i <= 11; i++) {
        if (string == notes[i]) {
            key = string;
            position = i;
            console.log(key);
            
            
        }

    }
    fst = key;
    snd = notes[position + 7];
    thrd = notes[position + 9];
    frth = notes[position + 5];
    if (snd == undefined){
        snd = notes[position - 5];   
    }
    if (thrd == undefined){
        thrd = notes[position - 3] + "m";
    }
    if (frth == undefined){
        frth = notes[position - 7];
    }


    

}