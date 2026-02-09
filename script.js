function createButton() {
    const operators = ["÷", "x", "-", "+", "="];
    const otherOperators = ["C", "±", "%"];
    const miscButtons = [0, "."];

    

    for (const i of operators) {
        operatorContainer.innerHTML += `<button class="button border-2 border-slate-500 rounded-md h-12" data-value="${i}">${i}</button>`;
    }


    for (const i of otherOperators) {
        otherOperatorContainer.innerHTML += `<button class="button border-2 border-slate-500 rounded-md h-12" data-value="${i}">${i}</button>`;
    }
    

    for (const i of miscButtons) {
        miscContainer.innerHTML += `<button class="button border-2 border-slate-500 rounded-md h-12" data-value="${i}">${i}</button>`;
    }
    

    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            const value = 7 - row * 3 + col; // calculates the value of rows starting button
            numContainer.innerHTML +=
                `<button class="button border-2 border-slate-500 rounded-md h-12" data-value="${value}">${value}</button>`;
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


function runCalculation() {
    let expr = display.value.trim();
    if (!expr) return;

    expr = expr.split("÷").join("/").split("x").join("*");

    let withPercent = "";
    for (let i = 0; i < expr.length; i++) {
        if (expr[i] >= "0" && expr[i] <= "9" || expr[i] === ".") {
            let num = "";
            while (i < expr.length && (expr[i] >= "0" && expr[i] <= "9" || expr[i] === ".")) {
                num += expr[i];
                i++;
            }
            if (i < expr.length && expr[i] === "%") {
                withPercent += "(" + num + "/100)";
                i++;
            } else {
                withPercent += num;
            }
            i--;
        } else {
            withPercent += expr[i];
        }
    }
    expr = withPercent;

    const allowed = "0123456789. +-*/()";
    for (let i = 0; i < expr.length; i++) {
        if (!allowed.includes(expr[i])) {
            display.value = "Error";
            return;
        }
    }

    try {
        const result = Function('"use strict"; return (' + expr + ")")();
        display.value = Number.isFinite(result) ? String(result) : "Error";
    } catch {
        display.value = "Error";
    }
}

function toggleSign() {
    const expr = display.value;
    let i = expr.length - 1;
    let numStr = "";
    while (i >= 0 && (expr[i] >= "0" && expr[i] <= "9" || expr[i] === ".")) {
        numStr = expr[i] + numStr;
        i--;
    }
    if (i >= 0 && expr[i] === "-") {
        const prev = i === 0 ? " " : expr[i - 1];
        if (prev === "+" || prev === "*" || prev === "/" || prev === "(" || prev === " ") {
            numStr = "-" + numStr;
            i--;
        }
    }
    if (numStr === "" || numStr === "-") return;
    const newNum = numStr.startsWith("-") ? numStr.slice(1) : "-" + numStr;
    display.value = expr.slice(0, i + 1) + newNum;
}

function handleButtonClick(event) {
    const button = event.target.closest("button");
    if (!button) return;
    const value = button.getAttribute("data-value");
    if (value === "C") {
        display.value = "";
    } else if (value === "=") {
        runCalculation();
    } else if (value === "±") {
        toggleSign();
    } else {
        display.value += value;
    }
}

buttonsContainer.addEventListener("click", handleButtonClick);


function handleKeyboardInput(event) {
    // Prevent space from activating the focused button
    if (event.key === " ") {
        event.preventDefault();
        return;
    }

    const key = event.key;

    if (key === "Escape") {
        display.value = "";
        event.preventDefault();
        return;
    }
    if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
        event.preventDefault();
        return;
    }
    if (key === "Enter" || key === "=") {
        runCalculation();
        event.preventDefault();
        return;
    }

    // Digits 0-9
    if (key >= "0" && key <= "9") {
        display.value += key;
        event.preventDefault();
        return;
    }

    // Decimal
    if (key === ".") {
        display.value += ".";
        event.preventDefault();
        return;
    }

    // Operators: map keyboard symbols to display symbols (÷, x)
    if (key === "+") {
        display.value += "+";
        event.preventDefault();
    } else if (key === "-") {
        display.value += "-";
        event.preventDefault();
    } else if (key === "*") {
        display.value += "x";
        event.preventDefault();
    } else if (key === "/") {
        display.value += "÷";
        event.preventDefault();
    } else if (key === "%") {
        display.value += "%";
        event.preventDefault();
    }
}

document.addEventListener("keydown", handleKeyboardInput);
