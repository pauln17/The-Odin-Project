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
    title.value = '';
    author.value = '';
    pages.value = '';
    pagesRead.value = '';

    popUp.setAttribute('id', 'active');
    overlayPopUp.setAttribute('id', 'active');
    openPopUpButton.removeAttribute('id');
}

const closePopUp = function() {
    title.value = '';
    author.value = '';
    pages.value = '';
    pagesRead.value = '';
    emptyForm = true;
    titleForm = true;
    authorForm = true;
    pagesForm = true;
    pagesReadForm = true;
    titleErrText.innerHTML = '';
    authorErrText.innerHTML = '';
    pagesErrText.innerHTML = '';
    pagesReadErrText.innerHTML = '';

    popUp.removeAttribute('id');
    overlayPopUp.removeAttribute('id');
    openPopUpButton.setAttribute('id', 'active');
}

// Obtains user-input and creates a book object from book constructor and then stores it into library array
let myLibrary = [];
let permanentLibrary = [];

function Book(title, author, pages, pagesRead) {
    this.title = title;
    this.author = author;
    this.pages= pages;
    this.pagesRead = pagesRead;
}

function addBookToLibrary() {
    title = document.querySelector('#title');
    author = document.querySelector('#author');
    pages = document.querySelector('#total-pages');
    pagesRead = document.querySelector('#pages-read');

    const newBook = new Book(title.value, author.value, pages.value, pagesRead.value);
    
    permanentLibrary.push(newBook);
    myLibrary = [];
    myLibrary.push(newBook);
    createLibrary();
}

let title = document.querySelector('#title');
let author = document.querySelector('#author');
let pages = document.querySelector('#total-pages');
let pagesRead = document.querySelector('#pages-read');
const titleErrText = document.querySelector('.title-error');
const authorErrText = document.querySelector('.author-error');
const pagesErrText = document.querySelector('.total-pages-error');
const pagesReadErrText = document.querySelector('.pages-read-error');
let emptyForm = true;
let titleForm = true;
let authorForm = true;
let pagesForm = true;
let pagesReadForm = true;

function containsOnlyLetters(str) {
    return /^[a-zA-Z]+$/.test(str);
  }

// Form validation
const form = document.getElementById('book-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (title.value.length === 0) {
        emptyForm = false;
        titleErrText.innerHTML = 'Empty Title';
    }

    if (author.value.length === 0) {
        emptyForm = false;
        authorErrText.innerHTML = 'Empty Author';
    }

    if (pages.value.length === 0) {
        emptyForm = false;
        pagesErrText.innerHTML = 'Empty Pages';
    } 

    if (pagesRead.value.length === 0) {
        emptyForm = false;
        pagesReadErrText.innerHTML = 'Empty Pages Read';
    } 

    if (validateAllForms() === true) {
        addBookToLibrary();
        closePopUp();
    }
})

title.addEventListener('input', () => {
    titleForm = true;
    if (title.value.length >= 25) {
        titleForm = false;
        titleErrText.innerHTML = 'Title must be less than 25 characters';
    } else {
        titleErrText.innerHTML = '';
    }

});

author.addEventListener('input', () => {
    authorForm = true;
    if (author.value.length >= 25) {
        authorForm = false;
        authorErrText.innerHTML = 'Title must be less than 25 characters';
    } else {
        authorErrText.innerHTML = '';
    }
});

pages.addEventListener('input', () => {
    pagesForm = true;
    if (isNaN(pages.value) === true) {
        pagesForm = false;
        pagesErrText.innerHTML = 'Must be a numerical value';
        pagesReadErrText.innerHTML = '';
        return;
    } else {
        pagesErrText.innerHTML = '';
    }

    if (parseInt(pages.value) < parseInt(pagesRead.value)) {
        pagesForm = false;
        pagesErrText.innerHTML = 'Pages read must not be more than total pages';
        pagesReadErrText.innerHTML = 'Pages read must not be more than total pages';
    } else {
        pagesErrText.innerHTML = '';
        pagesReadErrText.innerHTML = '';
    }
});

pagesRead.addEventListener('input', () => {
    pagesReadForm = true;
    if (isNaN(pagesRead.value) === true) {
        pagesReadForm = false;
        pagesReadErrText.innerHTML = 'Must be a numerical value';
        return;
    } else {
        pagesReadErrText.innerHTML = '';
    }

    if (parseInt(pages.value) < parseInt(pagesRead.value)) {
        pagesReadForm = false;
        pagesErrText.innerHTML = 'Pages read must not be more than total pages';
        pagesReadErrText.innerHTML = 'Pages read must not be more than total pages';
    } else {
        pagesErrText.innerHTML = '';
        pagesReadErrText.innerHTML = '';
    }
});

function validateAllForms() {
    if (emptyForm === false) {
        return false;
    } else if (titleForm === false) {
        return false;
    } else if (authorForm === false) {
        return false;
    } else if (pagesForm === false) {
        return false;
    } else if (pagesReadForm === false) {
        return false;
    }
    return true;
}

let removeButtons;
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
        titleText.textContent = `${book.title}`;
        authorText.textContent = `By: ${book.author}`;
        pagesText.textContent = `Total Pages: ${book.pages}`;
        pagesReadText.textContent = `Pages Read: ${book.pagesRead}`;

        const bookRemove = document.createElement('div');
        const bookRemoveButton = document.createElement('button');
        bookRemove.classList.add('book-remove');
        bookRemoveButton.classList.add('remove-button');
        bookRemoveButton.setAttribute('type', 'submit');
        bookRemoveButton.innerHTML = '&times;';
        
        // Remove Button Functionality
        bookRemoveButton.addEventListener('click', (e) => {
            e.target.parentElement.parentElement.remove();
        })
        removeButtons = document.querySelectorAll('.remove-button');

        bookDescription.append(titleText, authorText, pagesText, pagesReadText);
        bookRemove.appendChild(bookRemoveButton);
        bookCard.append(bookDescription, bookRemove);
        libraryDisplay.appendChild(bookCard);
    });
}

