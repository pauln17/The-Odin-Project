// Grid Setting Variables and Default Sizes
const container = document.querySelector('.container');
let grid = {rows: 30, cols:30};
let total = grid.rows * grid.cols;


// Determine Grid Size-
const sizeOne = document.querySelector('.size1');
sizeOne.addEventListener('click', () => { 
    clearGrid();
    grid = {rows: 10, cols:10};
    total = grid.rows * grid.cols;
    createGrid(total);
    boxes = document.querySelectorAll('.box');
    draw();
});
const sizeTwo = document.querySelector('.size2');
sizeTwo.addEventListener('click', () => { 
    clearGrid();
    grid = {rows: 30, cols:30};
    total = grid.rows * grid.cols;
    createGrid(total);
    boxes = document.querySelectorAll('.box');
    draw();
});
const sizeThree = document.querySelector('.size3');
sizeThree.addEventListener('click', () => { 
    clearGrid();
    grid = {rows: 50, cols:50};
    total = grid.rows * grid.cols;
    createGrid(total);
    boxes = document.querySelectorAll('.box');
    draw();
});


// Create Grid
createGrid(total);
function createGrid(total) {
    for (let i = 0; i < total; i++) {
        let box = document.createElement('div');
        container.appendChild(box);
        box.classList.add('box');
    }
    container.setAttribute('style', `grid-template-columns: repeat(${grid.cols}, 1fr);`);
    return;
}

let mouseDown = false;
container.addEventListener('mousedown', () => {
    mouseDown = true;
});
container.addEventListener('mouseup', () => {
    mouseDown = false;
});
document.addEventListener('mouseup', () => {
    mouseDown = false;
});

// Drawing Pen Function
let boxes = document.querySelectorAll('.box');
let colorChoice;
draw();
function draw() {
    boxes.forEach((singleBox) => {
        singleBox.addEventListener('mouseover', (event) => {
            if (mouseDown === true) {
                if (options === 'rainbow') {
                    let randColor = randomColor(singleBox);
                    singleBox.setAttribute('style', `background: ${randColor};`);
                }
                else if (options === 'eraser') {
                    singleBox.setAttribute('style', 'background-color:white;');
                }
                else if (options === 'color') {
                    colorChoice = document.querySelector('.colorChoice').value;
                    singleBox.setAttribute(`style`, `background-color:${colorChoice}`);
                }
            }
        });

        singleBox.addEventListener('click', (event) => { 
            if (options === 'rainbow') {
                let randColor = randomColor(singleBox);
                singleBox.setAttribute('style', `background: ${randColor};`);
            }
            else if (options === 'eraser') {
                singleBox.setAttribute('style', 'background-color:white;');
            }
            else if (options === 'color') {
                colorChoice = document.querySelector('.colorChoice').value;
                singleBox.setAttribute(`style`, `background-color:${colorChoice}`);
            }
        });
    });
}


// Determine Modes & Click Animation
const colorBtn = document.querySelector('.color');
const rainbowBtn = document.querySelector('.rainbow');
const eraserBtn = document.querySelector('.eraser');
let options = 'color';
colorBtn.addEventListener('click', () => {
    colorBtn.setAttribute('id', 'clicked');
    setTimeout(function () {
        colorBtn.removeAttribute('id');
    }, 250);
    options = 'color';
});
rainbowBtn.addEventListener('click', () => {
    rainbowBtn.setAttribute('id', 'clicked');
    setTimeout(function () {
        rainbowBtn.removeAttribute('id');
    }, 250);
    options = 'rainbow';
});
eraserBtn.addEventListener('click', () => {
    eraserBtn.setAttribute('id', 'clicked');
    setTimeout(function () {
        eraserBtn.removeAttribute('id');
    }, 250);
    options = 'eraser';
});


// Random Color Generator
function randomColor(element) {
    let hex = '0123456789ABCDEF';
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * hex.length)];
    }
    return color;
}


// Reset Button
const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', () => {
    resetBtn.setAttribute('id', 'clicked');
    setTimeout(function () {
        resetBtn.removeAttribute('id');
    }, 250);
    boxes.forEach((singleBox) => {
        singleBox.setAttribute('style', 'background-color:white;');
    });
});


// Clear Grid
function clearGrid() {
    boxes.forEach((element) => {
        container.removeChild(element);
    });
    total = 0;
}