let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let firstOperand = null;

function appendToDisplay(value) {
    if (value === "+/-") {
        currentInput = currentInput ? String(-parseFloat(currentInput)) : "";
    } else if (value === "%") {
        currentInput = currentInput ? String(parseFloat(currentInput) / 100) : "";
    } else if (["+", "-", "*", "/"].includes(value)) {
        if (firstOperand === null) {
            firstOperand = parseFloat(currentInput);
            operator = value;
            currentInput = "";
        } else if (currentInput !== "") {
            calculate();
            operator = value;
        }
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function updateDisplay() {
    display.value = currentInput || firstOperand || "0";
}

function clearDisplay() {
    currentInput = "";
    operator = "";
    firstOperand = null;
    updateDisplay();
}

function calculate() {
    if (firstOperand !== null && operator && currentInput !== "") {
        let secondOperand = parseFloat(currentInput);
        switch (operator) {
            case "+":
                firstOperand += secondOperand;
                break;
            case "-":
                firstOperand -= secondOperand;
                break;
            case "*":
                firstOperand *= secondOperand;
                break;
            case "/":
                firstOperand = secondOperand !== 0 ? firstOperand / secondOperand : "Error";
                break;
        }
        currentInput = "";
        operator = "";
        updateDisplay();
    }
}

// Initialize display
updateDisplay();
