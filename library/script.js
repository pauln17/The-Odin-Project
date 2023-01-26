// A section using query selectors to create an animated pop-up function for users to input the information of their book
const openPopUpButton = document.querySelector('[data-popup-open]');
const closePopUpButton = document.querySelector('[data-popup-close]');
const overlayPopUp = document.querySelector('.overlay');
const popUp = document.querySelector('.add-book-popup');

openPopUpButton.addEventListener('click', () => {
    openPopUp();
});

closePopUpButton.addEventListener('click', () => {
    closePopUp();
});

overlayPopUp.addEventListener('click', () => {
    closePopUp();
});

const openPopUp = function() {
    popUp.setAttribute('id', 'active');
    overlayPopUp.setAttribute('id', 'active');
    openPopUpButton.removeAttribute('id');
}

const closePopUp = function() {
    popUp.removeAttribute('id');
    overlayPopUp.removeAttribute('id');
    openPopUpButton.setAttribute('id', 'active');
}


// Obtains user-input and creates a book object from book constructor and then stores it into library array
let myLibrary = [];

function Book(title, author, pages, pagesRead) {
    this.title = title;
    this.author = author;
    this.pages= pages;
    this.pagesRead = pagesRead;
}

function addBookToLibrary(event) {
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#total-pages');
    const pagesRead = document.querySelector('#pages-read');

    const newBook = new Book(title.value, author.value, pages.value, pagesRead.value);
    myLibrary.push(newBook);
}

// Prevents default form submission
const form = document.getElementById('book-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary()
})


