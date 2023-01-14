// Calculator Operation Functions -- Add, Subtract, Multiply, Divide
const add = function(x, y) {
    return x + y;
}
const subtract = function(x, y) {
    return x - y;
}
const multiply = function(x, y) {
    return x * y;
}
const divide = function(x, y) {
    return x / y;
}

const operate = function(x, y, operator) {
    if (operator === 'add') {
        return add(x, y).toFixed(2);
    }
    else if (operator === 'subtract') {
        return subtract(x, y).toFixed(2);
    }
    else if (operator === 'multiply') {
        return multiply(x, y).toFixed(2);
    }
    if (operator === 'divide') {

        return divide(x, y).toFixed(2);
    }
}

// Populate Display
let display = '0'; // Variable for storing values for the display

// Top Buttons
const topButtons = document.querySelectorAll('.top-buttons');
const acButton = document.querySelector('#acButton'); // Selecting AC button to transition from AC or C based on display value
topButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.setAttribute('name', 'xButtonClickAnimations');
        setTimeout(function () {
            btn.removeAttribute('name');
        }, 250);

        const type = btn.getAttribute('value');
        if (type === 'clear'){
            display = '0';
            acButton.textContent = "AC";
            displayTop.textContent = ``;
            displayBottom.textContent = `${display}`;
            clearBooleans();
        }
        else if (type === 'sign' && display != '0') {
            if (display[0] !== '-') {
                display = '-' + display;
                displayBottom.textContent = `${display}`;
            }
            else {
                display = display.slice(1);
                displayBottom.textContent = `${display}`;
            }
        }
        else if (type === 'percentage' && display != '0') {
            display = parseFloat(display) / 100; // Long Decimal Error
            display = `${display.toPrecision(1)}`;
            displayBottom.textContent = `${display}`;
        }
    });
});

// Number Buttons
const numberButtons = document.querySelectorAll('.num-buttons');
const displayTop = document.querySelector('.savedEquations');
const displayBottom = document.querySelector('.currentEquations');
let lock = false;

numberButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const value = btn.getAttribute('value');
        // Continuation of Operator Buttons Function Below
        if (checkAnyOperator() === true) {
            lock = true;
            if (display === currentValue) {
                display = value;
            }
            else {
                display += value;
            }
            displayBottom.textContent = `${display}`;
        }
        if (lock === false) {
            if (display === '0') {
                display = value;
                acButton.textContent = 'C';
            } 
            else {
                display += value;
            }
            displayBottom.textContent = `${display}`;
        }

    });
});

// Operator Buttons
const opButtons = document.querySelectorAll('.op-buttons');
let addOp = false;
let subtractOp = false;
let multiplyOp = false;
let divideOp = false;
let currentValue = '';

opButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const operator = btn.getAttribute('value');
        if (display === '0') return;
        if (operator === '/') {
            currentValue = display;
            clearBooleans();
            divideOp = true;
            btn.setAttribute('id', 'currentOperatorMode');
        }
        else if (operator === 'x') {
            currentValue = display;
            clearBooleans();
            multiplyOp = true;
            btn.setAttribute('id', 'currentOperatorMode');
        }
        else if (operator === '-') {
            currentValue = display;
            clearBooleans();
            subtractOp = true;
            btn.setAttribute('id', 'currentOperatorMode');
        }
        else if (operator === '+') {
            currentValue = display;
            clearBooleans();
            addOp = true;
            btn.setAttribute('id', 'currentOperatorMode');
        }
        if (operator === '=') {
            if (addOp === true) {
                x = parseFloat(currentValue);
                y = parseFloat(display);
                display = add(x, y);
                displayBottom.textContent = `${display}`;
                displayTop.textContent = `${x} + ${y} =`
                clearBooleans();
            }
            if (subtractOp === true) {
                x = parseFloat(currentValue);
                y = parseFloat(display);
                display = add(x, y);
                displayBottom.textContent = `${display}`;
                displayTop.textContent = `${x} - ${y} =`
                clearBooleans();
            }
            if (multiplyOp === true) {
                x = parseFloat(currentValue);
                y = parseFloat(display);
                display = multiply(x, y);
                displayBottom.textContent = `${display}`;
                displayTop.textContent = `${x} x ${y} =`
                clearBooleans();
            }
            if (divideOp === true) {
                x = parseFloat(currentValue);
                y = parseFloat(display);
                display = divide(x, y);
                displayBottom.textContent = `${display}`;
                displayTop.textContent = `${x} / ${y} =`
                clearBooleans();
            }
        }

    });
}); // Continued in Numbers Function

// Function to clear booleans and operator button animation
function clearBooleans() {
    addOp = false;
    subtractOp = false;
    multiplyOp = false;
    divideOp = false;
    lock = false;
    clearOperatorAnimation();
}

// Function to check if any of the operator booleans are true
function checkAnyOperator () {
    if (addOp === true) {
        return true;
    }
    else if (subtractOp === true) {
        return true;
    }
    else if (multiplyOp === true) {
        return true;
    }
    else if (divideOp === true) {
        return true;
    }
    return false;
}

// Function to clear operator button animation mode
function clearOperatorAnimation() {
    opButtons.forEach(btn => {
        btn.removeAttribute('id');
    });
}