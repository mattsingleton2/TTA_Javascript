
function wheelResize(event) {
    var y = event.deltaY;                           //establishing the y variable to grab how MUCH the mousewheel scrolled on a Y-axis.
    var currentSize = event.target.style.width;     //establishing the currentSize variable to grab the current size of the targeted event element. Specifically width.
    if (y > 0) {                                    //If we went positive with the scroll size...
        newSize = parseInt(currentSize) + 10;       //Then parse currentSize as an integer and add 10 to it (we'll add the px definition momentarily)
    } else {                                        //Similarly, if we went negative with the scroll size...
        newSize = parseInt(currentSize) - 10;       //Then let's remove 10 from it. (px definition coming momentarily)
    }
    event.target.style.width = newSize + "px";      //We've got our newSize so we need to adjust the STYLE of the event target and change the width with the new size in px.
    event.target.style.height = newSize + "px";     //Same thing, but for height.
}

window.alert("Hello, World"); //Pops open a window alert

document.write('Hello, world...'); //writes some text
 
var A = "\nThis is a string."; //Instantiates a variable 'A' and assigns it a string.

document.write(A); //Writes that variable on the document.

var B = "\nThis is a string" + " for a window alert."; //Concatenating strings and storing them in the instantiated variable, "B"

window.alert(B); //Creates an alert calling the variable B

var C = "\nHe sighed, mumbling \"You\'ve got to be kidding me.\""; //More concatenation practice with escape characters.

document.write(C); //Just showing that it works...

document.write(A + ' ' + B + ' ' + C); //Conca + tenation

var name = "Matt", age = 33, height = "5\'7\""; //Multi-variable instantiation on a single line.

document.write(name + ' ' + age + ' ' + height); //Concatenating those and writing them.

var result = 6 + 6; //Instantiates variable 'result' and stores the value of an operation within it.

