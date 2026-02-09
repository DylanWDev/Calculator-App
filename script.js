function createButton() {
    
    

    const operators = ["÷", "x", "-", "+", "="];

    const otherOperators = ["C", "±", "%"];

    const miscButtons = [0, "."];

    
    // creates operator buttons
    for (const i of operators) {
        operatorContainer.innerHTML += `<button class="button border-2 border-red-500 h-12" data-value="${i}">${i}</button>`;
    }


    for (const i of otherOperators) {
        otherOperatorContainer.innerHTML += `<button class="button border-2 border-red-500 h-12" data-value="${i}">${i}</button>`;
    }
    

    for (const i of miscButtons) {
        miscContainer.innerHTML += `<button class="button border-2 border-red-500 h-12" data-value="${i}">${i}</button>`;
    }

    
    // creates number buttons
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            const value = 7 - row * 3 + col; // calculates the value of rows starting button
            numContainer.innerHTML +=
                `<button class="button border-2 border-red-500 h-12" data-value="${value}">${value}</button>`;
        }
    }
}


const buttonsContainer = document.querySelector(".buttons");
const display = document.querySelector("#display");
const operatorContainer = document.querySelector(".operator-buttons");
const otherOperatorContainer = document.querySelector(".other-operators");
const numContainer = document.querySelector(".num-buttons");
const miscContainer = document.querySelector(".misc-buttons");
createButton();


function handleButtonClick(event) {
    const button = event.target.closest("button");
    if (!button) return;
    const value = button.getAttribute("data-value");
    if (value === "C") {
        display.value = "";
    } else {
        display.value += value;
    }
}

buttonsContainer.addEventListener("click", handleButtonClick);








// for (let i = 7; i < 10; i++) {
//     container.innerHTML += `<button class="button border-2 border-red-500 w-13 h-12" data-value="${i}">${i}</button>`;
//     console.log(container.innerHTML);
// }


// for (let i = 4; i < 7; i++) {
//     container.innerHTML += `<button class="button border-2 border-red-500 w-13 h-12" data-value="${i}">${i}</button>`;
//     console.log(container.innerHTML);
// }

// for (let i = 1; i < 4; i++) {
//     container.innerHTML += `<button class="button border-2 border-red-500 w-13 h-12" data-value="${i}">${i}</button>`;
//     console.log(container.innerHTML);
// }