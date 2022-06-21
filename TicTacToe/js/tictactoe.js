//Turn-tracking
let activePlayer = 'X';
//Stores an array of moves -- used to determine win conditions.
let selectedSquares = [];

//This is for placing an X or an O in a square.
function placeXOrO(squareNumber) {
    //This condition ensures a square hasn't already been selected.
    //The .some() method is used to check each element of the selectedSquares array
    //to see if it contains the same square number clicked on.
    if (!selectedSquares.some(e => e.includes(squareNumber))) {
        //This retrieves the element id that was clicked.
        let select = document.getElementById(squareNumber);
        //Who's turn is it?
        if (activePlayer === 'X') {
            //If active player is X, the x.png is placed in the element.
            select.style.backgroundImage = 'url("images/x.png")';
            //Since there's only one other option...
            //I guess we could have gone ternary operation here.
            //might be trickier to read though, so code blocks it is.
        } else {
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer); //e.g 2x
        //Call to check win conditions.
        checkWinConditions();
        //Change active player.
        if (activePlayer === 'X') {
            //swap it.
            activePlayer = 'O';
            //otherwise...
        } else {
            activePlayer = 'X';
        }


        //Placement sounds.
        audio('./media/place.mp3');
        //this checks to see if it's the computer's turn.
        if (activePlayer === 'O') {
            //Disable clicking for NPC turn.
            disableClick();
            //Wait a second, then allow NPC to place.
            setTimeout(function () { computersTurn(); }, 1000)
        }
        //Returning true is needed for computersTurn() function to work.
        return true;
    }
    //This function results in a random square being selected.
    function computersTurn() {
        //Need a boolean for the while loop.
        let success = false;
        //Variable to store a random number.
        let pickASquare;
        //Allows while loop to keep trying if the square is already selected.
        while(!success) {
            //Randomizer.
            pickASquare = String(Math.floor(Math.random() * 9));
            //If random number evaluates true, the square hasn't yet been selected so...
            if (placeXOrO(pickASquare)) {
                //Call the function
                placeXOrO(pickASquare);
                //Change the boolean
                success = true;
            };
        }
    }
}

//This function parses the selectedSquares array to search for win Conditions.
//drawWinLine function is called to draw line if condition is met.
function checkWinConditions() {
    // X CONDITIONS
    // X 0, 1, 2 condition.
    if      (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    // X 3, 4, 5 condition...
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    //X 6, 7, 8 condition...
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    //X 0, 3, 6 condition...
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    //X 1, 4, 7 condition...
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    //X 2, 5, 8 condition...
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    //X 6, 4, 2 condition...
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    //X 0, 4, 8 condition...
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    // O CONDITIONS
    //O 0, 1, 2 condition...
    else if (arrayIncludes('0O', '1O', '2O')) {drawWinLine(50, 100, 558, 100) }
    //O 3, 4, 5 condition...
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    //O 6, 7, 8 condition...
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    //O 0, 3, 6 condition...
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    //O 1, 4, 7 condition...
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    //O 2, 5, 8 condition...
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    //O 6, 4, 2 condition...
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    //O 0, 4, 8 condition...
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    //This condition checks for a tie. If none of the above conditions register and 9
    //squares are selected, the code executes.
    else if (selectedSquares.length >= 9) {
        //Tie game sound
        audio('./media/tie.mp3');
        //.3 second timer before resetting game.
        setTimeout(function() { resetGame(); }, 1000);
    }

    //This function checks if an array includes 3 strings. Used to check for each
    //win condition.
    function arrayIncludes(SquareA, SquareB, SquareC) {
        //These 3 variables will be used to check for the three in a row.
        const a = selectedSquares.includes(SquareA);
        const b = selectedSquares.includes(SquareB);
        const c = selectedSquares.includes(SquareC);
        //If the 3 variables we pass are all included in our array true is 
        //returned and our else if condition executes the drawWinLine() function.
        if (a === true && b === true && c === true) { return true }
    }
}

//This function makes our body element temporarily unclickable.
function disableClick() {
    body.style.pointerEvents = 'none';
    //Clickable after 1s
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

//This function takes a string of the path we set for placement sound.
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

//This function utilizes the canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //Access the canvas
    const canvas = document.getElementById('win-lines');
    //this line gives us access to methods and properties for HTML Canvas
    const c = canvas.getContext('2d');
    //This line indicates where the start of a line's x-axis is.
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;

    //This function interacts with drawing out the canvas
    function animateLineDrawing() {
        //Create the loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //Clear content from last loop
        c.clearRect(0,0,608,608)
        //Start new path
        c.beginPath();
        //Starting point
        c.moveTo(x1, y1)
        //End point
        c.lineTo(x, y)
        //line width
        c.lineWidth = 10;
        //Color of line
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        //Draw the line!
        c.stroke();
        //Check to see if we hit the endpoint.
        if (x1 <= x2 && y1 <= y2) {
            //Add 10 to previous x point.
            if (x < x2) { x += 10; }
            //Add 10 to previous y point.
            if (y < y2) { y += 10; }
            //Cancel the animation loop if we reach the end point.
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        //This condition is similar to the above, but it's necessary for the
        //6,4,2 win condition
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

        //This function clears our canvas after our win line is drawn.
        function clear() {
            //start loop
            const animationLoop = requestAnimationFrame(clear);
            //clear it!
            c.clearRect(0,0,608,608);
            //stop loop
            cancelAnimationFrame(animationLoop);
        }
        //Stop clicking while win sound is playing
        disableClick();
        //play win sounds
        audio('./media/winGame.mp3');
        //call main animation loop
        animateLineDrawing();
        //Wait, clear the canvas, reset the game, allow clickin'.
        setTimeout(function () { clear(); resetGame();}, 1000);
}

//This function resets the game for a tie or a win
function resetGame() {
    //iterate through the squares.
    for (let i=0; i < 9; i++) {
        //get HTML element of i.
        let square = document.getElementById(String(i));
        //Remove our background styling (x / o)
        square.style.backgroundImage = '';
    }
    //Reset the array.
    selectedSquares = [];
}