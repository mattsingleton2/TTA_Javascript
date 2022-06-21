//Create an object to keep track of our values.
const Calculator = {
    Display_Value: '0',
    First_Operand: null,
    Wait_Second_Operand: false,
    operator: null,
    //Display 0 on the screen, hold the first operand for any expressions
    //checks for the second operand, and then holds the operatOR.
};

//modify values when we click a button...
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    //we need to check to see if Wait_Second_Operand is true and set
    //Display_Value to the key that was clicked.
    if (Wait_Second_Operand === true) {
        //Display the digit, and toggle that flag.
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //Overwrite Display_Value if the current value is 0 otherwise add on to it.
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

//Decimal point handling.
function Input_Decimal(dot) {
    //ensure that accidental decimal clickin' doesn't cause bugs...
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        //We are saying that if the Display_Value does not contain a decimal point
        //we want to add that decimal point
        Calculator.Display_Value += dot;
    }
}

//Operator handling
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator
    //when an operator key is pressed, we convert the current number
    //displayed on the screen to a number and then store the result in 
    //Calculator.First_Operand if it doesn't already exist.
    const Value_of_Input = parseFloat(Display_Value);
    //Check if an operator already exists and if Wait_Second_Operand is true,
    //then updates the operator and exits the function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {//Checks if operator already exists
        const Value_Now = First_Operand || 0;
        //if operator exists, property lookup is performed for the operator
        //in the Perform_Calculation object and the function that matches the 
        //operator is executed.
        let result = Perform_Calculation[operator] (Value_Now, Value_of_Input);
        //here we add a fixed amount of numbers after the decimal
        result = Number(result).toFixed(9)
        //This removes trailing 0's...
        result = (result * 1).toString()
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);

    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}
//This function updates the screen with the contents of Display_Value
function Update_Display() { 
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
// this section monitors button clickin'.
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (e) => {
    //target var is an object that represents the element (e) that was clicked.
    const { target } = e;
    //If it wasn't a button, abort.
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }

    //Ensures that the All-Clear clears the numbers from the calculator
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
})