var Kanjou = {
    "name": "Kanjou Effect",
    "year": 2008,
    "artist": "One Ok Rock",
    "song": 8,
    "genre": "Japanese Rock"
}
delete Kanjou.year;

function display() {
    document.getElementById("dictionary").innerHTML = Kanjou.name + ': ' + Kanjou.artist + 'Songs: ' + Kanjou.song + 'Genre: ' + Kanjou.genre + 'Year: ' + Kanjou.year;
}