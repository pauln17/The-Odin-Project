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

function addBookToLibrary() {
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#total-pages');
    const pagesRead = document.querySelector('#pages-read');

    const newBook = new Book(title.value, author.value, pages.value, pagesRead.value);
    myLibrary.push(newBook);
    createLibrary();
}

// Prevents default form submission
const form = document.getElementById('book-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary()
})

// Function to create book elements contained within library array and display them
function createLibrary() {
    myLibrary.forEach((book) => {
        const libraryDisplay = document.querySelector('.book-info');

        const bookCard = document.createElement('div');
        bookCard.classList.add('book');
        const bookDescription = document.createElement('div');
        bookDescription.classList.add('book-description');

        const titleText = document.createElement('h4');
        const authorText = document.createElement('h5');
        const pagesText = document.createElement('p');
        const pagesReadText = document.createElement('p');
        titleText.textContent = `Title: ${book.title}`;
        authorText.textContent = `Author: ${book.author}`;
        pagesText.textContent = `Total Pages: ${book.pages}`;
        pagesReadText.textContent = `Pages Read: ${book.pagesRead}`;

        const bookRemove = document.createElement('div');
        const bookRemoveButton = document.createElement('button');
        bookRemove.classList.add('book-remove');
        bookRemoveButton.setAttribute('type', 'submit');
        bookRemoveButton.innerHTML = '&times;';

        bookDescription.append(titleText, authorText, pagesText, pagesReadText);
        bookRemove.appendChild(bookRemoveButton);
        bookCard.append(bookDescription, bookRemove);
        libraryDisplay.appendChild(bookCard);
    });
}

