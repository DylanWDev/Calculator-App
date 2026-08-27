const buttonContainer = document.getElementById('calculator-buttons');

buttonContainer.addEventListener("click", (event) => {
    const clickedButton = event.target.closest("button");

    if (!clickedButton) return;

    const buttonValue = clickedButton.textContent.trim();

    inputDisplay(buttonValue);
    console.log(buttonValue)
});


function inputDisplay(value) {
    const display = document.getElementById('display');
    display.value = value;
}


