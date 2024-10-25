let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === '' && previousInput === '') return;
    if (currentInput === '') {
        operator = op;
        updateDisplay();
    } else {
        if (operator) calculate();
        operator = op;
        previousInput = currentInput;
        currentInput = '';
        updateDisplay();
    }
}

function updateDisplay() {
    display.value = previousInput + operator + currentInput;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
}

function calculate() {
    if (previousInput === '' || currentInput === '') return;
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = current !== 0 ? prev / current : 'Error';
            break;
        default:
            return;
    }
    currentInput = result;
    operator = '';
    previousInput = '';
    updateDisplay();
}