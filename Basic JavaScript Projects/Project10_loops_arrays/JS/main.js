function Call_Loop() {
    var counter = 1;
    var display = "";
    while (counter < 11) {
        display += "<br>" + counter;
        counter++;
    }
    document.getElementById("Loop").innerHTML = display;
}

function Check_Length() {
    var string = document.getElementById("len_string").value;
    console.log(string);
    document.getElementById("Length").innerHTML = "The string is " + string.length + " characters long.";
}

function Create_List() {
    var Content = "";
    var X;
    var Instruments = ["Guitar", "Piano", "Violin", "Viola", "Cello"];
    for (X = 0; X < Instruments.length; X++) {
        Content += Instruments[X] + "<br>";
    }
    document.getElementById("List").innerHTML = Content;
}