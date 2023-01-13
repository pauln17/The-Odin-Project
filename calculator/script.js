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

console.log(operate(5, 8888, 'divide'))