function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {
    var subtraction = 10 - 2;
    document.getElementById("Math").innerHTML = "10 - 2 = " + subtraction;
}

function multiplication_Function() {
    var multiplication = 100 * 4;
    document.getElementById("Math").innerHTML = "100 * 4 = " + multiplication;
}

function division_Function() {
    var division = 500 / 4
    document.getElementById("Math").innerHTML = "500 / 4 = " + division;
}

function multiple_Operator() {
    var simple_Math = (1 + 2) * 50 / 32 + 10;
    document.getElementById("Math").innerHTML = "1 plus 2, times 50, divided by 32 plus 10 = " + simple_Math;
}

function modulus_Function() {
    var modulo = 25 % 6;
    document.getElementById("Math").innerHTML = "25 modulo 6 leaves a remainder of " + modulo;
}

function negative_Function() {
    var example = 1500;
    document.getElementById("Math").innerHTML = -example;
}

function increment() {
    var value = parseInt((document.getElementById("Counter").value), 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById("Counter").value = value;
}

function decrement() {
    var value = parseInt((document.getElementById("Counter").value), 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById("Counter").value = value;
}

function randomize() {
    var randomNumber = (Math.floor(Math.random() * 100));
    document.getElementById("random").value = randomNumber;
}