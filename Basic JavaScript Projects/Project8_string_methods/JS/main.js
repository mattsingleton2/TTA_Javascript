var string1 = "This is a ";
var string2 = "series of strings that have been ";
var string3 = "concatenated.";

document.getElementById("Concatenation").innerHTML = string1.concat(string2, string3);

//Combining a couple of tasks here. Slice the above and use toUpperCase().
//I used the search() feature to figure out where to start instead of guessing.
//stashed that in a variable startPoint and used it in the slice() method.
function SliceIt() {
    var sentence = document.getElementById("Concatenation").innerHTML;
    console.log(sentence);
    var startPoint = sentence.search("series");
    document.getElementById("Sliced").innerHTML = sentence.slice(startPoint, 27).toUpperCase();
}

function numberToString() {
    var usersNumber = document.getElementById("userNumber").value;
    document.getElementById("numberAsAString").innerHTML = usersNumber.toString() + " is a string and I can use string methods on it now!";
}


function stringToNumber() {
    var usersNumber = document.getElementById("stringNumber").value;
    console.log(usersNumber);
    usersNumber = parseInt(usersNumber);
    console.log(usersNumber);
    document.getElementById("NoLongerAString").innerHTML = usersNumber.toPrecision(4);
    document.getElementById("FixedType").innerHTML = usersNumber.toFixed(2);
    document.getElementById("ValueOf").innerHTML = usersNumber.valueOf();
}