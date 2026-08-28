const buttonContainer = document.getElementById("calculator-buttons");
const display = document.getElementById("display");
const operators = ["+", "-", "x", "÷"];

let currentNumber = "";

display.value = "0";

buttonContainer.addEventListener("click", (event) => {
    const clickedButton = event.target.closest("button");

    if (!clickedButton) return;

    const buttonValue = clickedButton.textContent.trim();

    if (buttonValue === "AC") {
        currentNumber = "";
        display.value = "0";
        return;
    }

    const numberValue = Number(buttonValue);

    if (buttonValue !== "" && !Number.isNaN(numberValue)) {
        if (currentNumber === "") {
            currentNumber = buttonValue;
        } else {
            currentNumber += buttonValue;
        }

        display.value = currentNumber;
    } else if (operators.includes(buttonValue)) {
        currentNumber += ` ${buttonValue} `;
        display.value = currentNumber;
    }

    console.log(display.value);
});


function addition(firstNumber, secondNumber) {
    // let firstNumber = display.value
}

function subtraction(firstNumber, secondNumber) {
}

function multiplication(firstNumber, secondNumber) {
}

function division(firstNumber, secondNumber) {
}
