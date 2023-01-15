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

// Operate Function
const operate = function(x, y, operator) {
    switch (operator) {
        case '+':
            return add(x, y);
        case '-':
            return subtract(x, y);
        case 'x':
            return multiply(x, y);
        case '/':
            if (y === 0) return 'ERROR';
            return divide(x, y);
    }
    return null;
}

// Populate Display
let displayNumber = '0'; // Variable for storing values for the display
let hasNegative = false; // Variable for toggling negative

// Top Buttons/Horizontal Axis Buttons
const topButtons = document.querySelectorAll('.top-buttons');
const acButton = document.querySelector('#acButton'); // Selecting AC button to transition from AC or C based on display value
topButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Click Animation
        btn.setAttribute('name', 'xButtonClickAnimations');
        setTimeout(function () {
            btn.removeAttribute('name');
        }, 250);

        const type = btn.getAttribute('value');

        if (type === 'clear'){
            displayNumber = '0';
            x = '';
            y = '';
            clearOpAnimation();
            resetOperations();
            acButton.textContent = "AC";
            displayTop.textContent = ``;
            displayBottom.textContent = `${displayNumber}`;
        }
        else if (type === 'sign' && displayNumber != '0') {
            if (hasNegative === false) {
                displayNumber = '-' + displayNumber;
                displayBottom.textContent = `${displayNumber}`;
                hasNegative = true;
            }
            else if (hasNegative === true) {
                displayNumber = displayNumber.toString().slice(1);
                displayBottom.textContent = `${displayNumber}`;
                hasNegative = false;
            }
        }
        else if (type === 'percentage' && displayNumber != '0') {
            displayNumber = parseFloat(displayNumber) / 100; // Long Decimal Error
            displayNumber = `${displayNumber.toPrecision(1)}`;
            displayBottom.textContent = `${displayNumber}`;
        }
    });
});

// Number Buttons
const numberButtons = document.querySelectorAll('.num-buttons');
const displayTop = document.querySelector('.savedEquations');
const displayBottom = document.querySelector('.currentEquations');
let runOnce = false;

numberButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const value = btn.getAttribute('value');
        // Clear if calculator display showed undefined
        if (error === true) {
            displayNumber = '0';
            x = '';
            y = '';
            clearOpAnimation();
            resetOperations();
            acButton.textContent = "AC";
            displayTop.textContent = ``;
            displayBottom.textContent = `${displayNumber}`;
            error = false;
        }
        // Prevent Trailing Zero
        if (checkOperatorState() === true) {
            if (value != '.' && runOnce != true) {
                displayNumber = value;
                runOnce = true;
            } 
            else if (displayNumber.length <= 8 && displayNumber !== '0') {
    
                // Prevents Multiple Decimals
                if (value === '.' && displayNumber.includes('.') === true) {
                    return;
                }
    
                // Add To Display
                displayNumber += value;
            }
        }
        else {
            if (displayNumber === '0' && value != '.') {
                displayNumber = value;
                acButton.textContent = 'C';
            } 
            else if (displayNumber.length <= 8 && displayNumber !== '0') {
    
                // Prevents Multiple Decimals
                if (value === '.' && displayNumber.includes('.') === true) {
                    return;
                }
    
                // Add To Display
                displayNumber += value;
            }
        }


        // Set Display
        displayBottom.textContent = `${displayNumber}`;
    });
});

// Operator Buttons
const opButtons = document.querySelectorAll('.op-buttons');
let x;
let y;
let addClicked = false;
let subtractClicked = false;
let multiplyClicked = false;
let divideClicked = false;
let operatorType = '';
let error = false;

opButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (error === true) return;
        clearOpAnimation();
        const operation = btn.getAttribute('value');
        switch(operation) {
            case '+':
                addClicked = true;
                hasNegative = false;
                btn.setAttribute('id', 'currentOperatorMode');
            case '-':
                subtractClicked = true;
                hasNegative = false;
                btn.setAttribute('id', 'currentOperatorMode');
            case 'x':
                multiplyClicked = true;
                hasNegative = false;
                btn.setAttribute('id', 'currentOperatorMode');
            case '/':
                divideClicked = true;
                hasNegative = false;
                btn.setAttribute('id', 'currentOperatorMode');
        }

        if (operation === '=' && checkOperatorState() === true) {
            btn.setAttribute('id', 'equalButtonClickAnimations');
            setTimeout(function () {
                btn.removeAttribute('id');
            }, 250);
            y = parseFloat(displayNumber)
            displayNumber = operate(x, y, operatorType);
            console.log(displayNumber)
            if (displayNumber === 'ERROR') {
                error = true;
            }
            if (displayNumber > 999999999 || displayNumber < -999999999) {
                displayNumber = displayNumber.toExponential(0);
                x = x.toExponential(0);
                error = true;
            }
            if (displayNumber.toString().length >= 10) {
                displayNumber = displayNumber.toString().slice(0, 11);
            }
            resetOperations();
            displayTop.textContent = `${x} ${operatorType} ${y} = `;
            displayBottom.textContent = `${displayNumber}`;

        } else {
            operatorType = operation;
            x = parseFloat(displayNumber);
        }
    });
});

// Function to determine if any of the operator buttons were clicked
const checkOperatorState = function() {
    if (addClicked === true) {
        return true;
    }
    if (subtractClicked === true) {
        return true;
    }
    if (multiplyClicked === true) {
        return true;
    }
    if (divideClicked === true) {
        return true;
    }
    return false;
}

// Reset Function
const resetOperations = function() {
    addClicked = false;
    subtractClicked = false;
    multiplyClicked = false;
    divideClicked = false;
    runOnce = false;
}

// Clear Operator Mode Button Animation
const clearOpAnimation = function () {
    opButtons.forEach(btn => {
            btn.removeAttribute('id');
    });
}