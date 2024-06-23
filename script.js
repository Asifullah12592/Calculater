// script.js

let display = document.getElementById('display');
let displayValue = '';

function appendValue(value) {
    displayValue += value;
    display.innerText = displayValue;
}

function clearDisplay() {
    displayValue = '';
    display.innerText = '0';
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    display.innerText = displayValue || '0';
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
        display.innerText = displayValue;
    } catch (e) {
        display.innerText = 'Error';
        displayValue = '';
    }
}
