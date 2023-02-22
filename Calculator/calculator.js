// Calculator
console.log("Calculator");

// Below we are fetching the screen with the help of "screen" id.
let screen = document.getElementById("screen");
// Below we are fetching the calculator buttons with the help of "buttons" html tag in the dom.
let buttons = document.querySelectorAll("button");
// Below we have created a variable called "inputValue" and kept it as a null.
let inputValue = "";

// Using a (for of loop) to loop through the calculator buttons.
for (keys of buttons) {
    // Adding a "click" event listener to the (keys of button) and a function.
    keys.addEventListener("click", (e) => {
        // Fetching the text present inside the <button> tag and storng it into the "buttonText" variable.
        buttonText = e.target.innerText;
        // Below code means that if someone clicks on the "X" multiply button of the calculator then change that "X" into "*" for the evaluation purpose.
        if (buttonText == "X") {
            buttonText = "*";
            // Below we are storing the text written on the calculator buttons into the "inputValue" variable.
            inputValue += buttonText;
            // Below we are showing the text which was stored into the "inputValue" variable onto the screen with the help of (screen.value)
            screen.value = inputValue;
        }
        else if(buttonText == "÷"){
            buttonText = "/";
            // Below we are storing the text written on the calculator buttons into the "inputValue" variable.
            inputValue += buttonText;
            // Below we are showing the text which was stored into the "inputValue" variable onto the screen with the help of (screen.value)
            screen.value = inputValue;
        }
        else if(buttonText == "Pow"){
            buttonText = "**";
            // Below we are storing the text written on the calculator buttons into the "inputValue" variable.
            inputValue += buttonText;
            // Below we are showing the text which was stored into the "inputValue" variable onto the screen with the help of (screen.value)
            screen.value = inputValue;
        }
        // If someone clicks on the "C" button of calculator then empty the calculator's screen. 
        else if (buttonText == "C") {
            // Below we have set the value of "inputValue" variable as null.
            inputValue = "";
            // Below we are emptying the calculatror's screen by equating (screen.value) with "inputValue"
            screen.value = inputValue;
        }
        else if (buttonText == "=") {
            screen.value = eval(inputValue);
        }
        else {
            inputValue += buttonText;
            screen.value = inputValue;
        }
    });
};