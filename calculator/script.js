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
            displayBottom.textContent = `${display}`;
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

numberButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const value = btn.getAttribute('value');
        if (display === '0') {
            display = value;
            acButton.textContent = 'C';
        } 
        else {
            display += value;
        }
        displayBottom.textContent = `${display}`;
    });
});

