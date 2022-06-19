var exampleString = "This is a string!";

document.write(typeof exampleString);

document.write(10 + "5");

function notNumber() {
    document.getElementById("NaN").innerHTML = 0 / 0;
}

function trueNaN() {
    document.getElementById("IsNaN").innerHTML = isNaN("This is Not a Number.");
}

function falseNaN() {
    document.getElementById("IsntNaN").innerHTML = isNaN(007);
}

function infinite() {
    document.getElementById("Infinity").innerHTML = 2E3202;
}

function neginfinite() {
    document.getElementById("NegInfinity").innerHTML = -2E3202;
}

function trueOrFalse() {
    var first = parseInt((document.getElementById("first").value), 10);
    first = isNaN(first) ? 0 : first;
    var second = parseInt((document.getElementById("second").value), 10);
    second = isNaN(second) ? 0 : second
    var result = first > second;
    document.getElementById("result").value = result;
}

//Console logs for math operators;
console.log(2 + 2);
console.log(2 > 5);

//Using document.write() to show true and false
document.write(2 == 2);
document.write(2 == 3);

//using document.write to show the === operator with true and false with strings / numbers.
document.write(2 === 2);
document.write(2 === "Three");
document.write(2 === "2");
document.write(2 === 3);

//using document.write to show true and false AND and OR operators.
document.write(2 === 2 && 3 === 3);
document.write(2 === 2 && 2 === "3");
document.write(2 === 2 || 2 === "3");
document.write(2 === "2" || 2 === "3");

//using document.write to show the NOT operator with a true and false return. 
document.write(12 > 10);
document.write(!(12 > 10));
