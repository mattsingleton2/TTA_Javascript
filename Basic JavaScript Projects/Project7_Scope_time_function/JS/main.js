//Global Variable since Pi will never change. We hope.
var pi = 3.14;

//Area, but localizing the radius variable. Had to include an error here.
function Area() {
    var radius = document.getElementById("radis").value;
    console.log(radius);
    var AreaResult = pi * (radius ^ 2);
    document.getElementById("Area").innerHTML = AreaResult;
}

//Let's make a greeting function based on the time of the day, locally.
function Greeting() {
    var time = new Date().getHours();
    if (time >= 0 && time <= 5) {
        document.getElementById("Timing").innerHTML = "It's really early. You should go back to sleep";
    } else if (time >= 6 && time < 12) {
        document.getElementById("Timing").innerHTML = "Good morning!";
    } else if (time >= 12 && time <= 17) {
        document.getElementById("Timing").innerHTML = "Good afternoon!";
    } else {
        document.getElementById("Timing").innerHTML = "Good evening!";
    }
}

//Checking the riddle answer to see if they're correct... also forcing
//the guess to go lowercase so I have fewer cases to compare against.
function riddle() {
    var userGuess = document.getElementById("Guess").value.toLowerCase();
    console.log(userGuess);
    if (userGuess == "needle" || userGuess == "a needle") {
        document.getElementById("riddleResult").innerHTML = "You're correct!";
    } else {
        document.getElementById("riddleResult").innerHTML = "I'm sorry, you're incorrect.";
    }
}