const buttonContainer = document.getElementById('calculator-buttons');
const display = document.getElementById("display");

let currentNumber = "";

buttonContainer.addEventListener("click", (event) => {
    const clickedButton = event.target.closest("button");

    if (!clickedButton) return;

    const buttonValue = clickedButton.textContent.trim();
    const numberValue = Number(buttonValue);

    if (buttonValue !== "" && !Number.isNaN(numberValue)) {
        currentNumber += buttonValue;
        display.value = currentNumber;
    }

    console.log(display.value);
});


console.log(currentNumber)
function basicArtithmetic() {
    

}

