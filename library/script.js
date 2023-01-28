// A section using query selectors to create an animated pop-up function for users to input the information of their book
const openPopUpButton = document.querySelector("[data-popup-open]");
const closePopUpButton = document.querySelector("[data-popup-close]");
const overlayPopUp = document.querySelector(".overlay");
const popUp = document.querySelector(".add-book-popup");

openPopUpButton.addEventListener("click", () => {
  openPopUp();
});

closePopUpButton.addEventListener("click", () => {
  closePopUp();
});

overlayPopUp.addEventListener("click", () => {
  closePopUp();
});

const openPopUp = function () {
  // Resetting Variables When Add Form Opens
  title.value = "";
  author.value = "";
  pages.value = "";
  pagesRead.value = "";
  emptyForm = true;
  titleForm = true;
  authorForm = true;
  pagesForm = true;
  pagesReadForm = true;
  titleErrText.innerHTML = "";
  authorErrText.innerHTML = "";
  pagesErrText.innerHTML = "";
  pagesReadErrText.innerHTML = "";

  popUp.setAttribute("id", "active");
  overlayPopUp.setAttribute("id", "active");
  openPopUpButton.removeAttribute("id");
};

const closePopUp = function () {
  // Resetting Variables When Add Form Closes
  title.value = "";
  author.value = "";
  pages.value = "";
  pagesRead.value = "";
  emptyForm = true;
  titleForm = true;
  authorForm = true;
  pagesForm = true;
  pagesReadForm = true;
  titleErrText.innerHTML = "";
  authorErrText.innerHTML = "";
  pagesErrText.innerHTML = "";
  pagesReadErrText.innerHTML = "";

  popUp.removeAttribute("id");
  overlayPopUp.removeAttribute("id");
  openPopUpButton.setAttribute("id", "active");
};

// Library Array
let myLibrary = [];

// Book Constructor -- Book Name, Author of Book, Total Pages, Amount of Pages Read
function Book(title, author, pages, pagesRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.pagesRead = pagesRead;
}

// Create Book Object from User Input
function createBook() {
  title = document.querySelector("#title");
  author = document.querySelector("#author");
  pages = document.querySelector("#total-pages");
  pagesRead = document.querySelector("#pages-read");

  const newBook = new Book(
    title.value,
    author.value,
    pages.value,
    pagesRead.value
  );
  myLibrary = [];
  myLibrary.push(newBook);

  createLibrary();
}

// Form Validation
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let pages = document.querySelector("#total-pages");
let pagesRead = document.querySelector("#pages-read");
const titleErrText = document.querySelector(".title-error");
const authorErrText = document.querySelector(".author-error");
const pagesErrText = document.querySelector(".total-pages-error");
const pagesReadErrText = document.querySelector(".pages-read-error");
let emptyForm = true;
let titleForm = true;
let authorForm = true;
let pagesForm = true;
let pagesReadForm = true;

const form = document.getElementById("book-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

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

  function checkEmptyInput() {
    emptyForm = true;
    if (title.value.length === 0) {
      emptyForm = false;
      titleErrText.innerHTML = "Empty Title";
    }

    if (author.value.length === 0) {
      emptyForm = false;
      authorErrText.innerHTML = "Empty Author";
    }

    if (pages.value.length === 0) {
      emptyForm = false;
      pagesErrText.innerHTML = "Empty Pages";
    }

    if (pagesRead.value.length === 0) {
      emptyForm = false;
      pagesReadErrText.innerHTML = "Empty Pages Read";
    }
  }

  checkEmptyInput();

  if (validateAllForms() === true) {
    createBook();
    closePopUp();
  }
});

// Validate Title Input
title.addEventListener("input", () => {
  titleForm = true;
  if (title.value.length >= 25) {
    titleForm = false;
    titleErrText.innerHTML = "Title must be less than 25 characters";
  } else {
    titleErrText.innerHTML = "";
  }
});

// Validate Author Input
author.addEventListener("input", () => {
  authorForm = true;
  if (author.value.length >= 25) {
    authorForm = false;
    authorErrText.innerHTML = "Title must be less than 25 characters";
  } else {
    authorErrText.innerHTML = "";
  }
});

// Validate Pages Input
pages.addEventListener("input", () => {
  pagesForm = true;
  if (isNaN(pages.value) === true) {
    pagesForm = false;
    pagesErrText.innerHTML = "Must be a numerical value";
    pagesReadErrText.innerHTML = "";
    return;
  } else {
    pagesErrText.innerHTML = "";
  }

  pagesReadForm = true;
  if (parseInt(pages.value) < parseInt(pagesRead.value)) {
    pagesForm = false;
    pagesReadForm = false;
    pagesErrText.innerHTML = "Pages read must not be more than total pages";
    pagesReadErrText.innerHTML = "Pages read must not be more than total pages";
  } else {
    pagesErrText.innerHTML = "";
    pagesReadErrText.innerHTML = "";
  }
});

// Validate Pages Read Input
pagesRead.addEventListener("input", () => {
  pagesReadForm = true;
  if (isNaN(pagesRead.value) === true) {
    pagesReadForm = false;
    pagesReadErrText.innerHTML = "Must be a numerical value";
    return;
  } else {
    pagesReadErrText.innerHTML = "";
  }

  pagesForm = true;
  if (parseInt(pages.value) < parseInt(pagesRead.value)) {
    pagesReadForm = false;
    pagesForm = false;
    pagesErrText.innerHTML = "Pages read must not be more than total pages";
    pagesReadErrText.innerHTML = "Pages read must not be more than total pages";
  } else {
    pagesErrText.innerHTML = "";
    pagesReadErrText.innerHTML = "";
  }
});

// Function to create book elements contained within library array and display them
function createLibrary() {
  myLibrary.forEach((book) => {
    // Select Library Display Container to Enable Appending
    const libraryDisplay = document.querySelector(".book-info");

    // Create Book
    const bookCard = document.createElement("div");
    bookCard.classList.add("book");
    const bookDescription = document.createElement("div");
    bookDescription.classList.add("book-description");

    // Creating Book Elements
    const titleText = document.createElement("h4");
    const authorText = document.createElement("h5");
    const pagesText = document.createElement("p");
    const pagesReadText = document.createElement("p");
    // Setting Book Element Contents to Content of Book
    titleText.textContent = `${book.title}`;
    authorText.textContent = `By: ${book.author}`;
    pagesText.textContent = `Total Pages: ${book.pages}`;
    pagesReadText.textContent = `Pages Read: ${book.pagesRead}`;

    // Dividers For Buttons
    const buttonDiv = document.createElement("div");
    const bookRemove = document.createElement("div");
    bookRemove.classList.add("book-remove");

    // Remove Book Button
    const bookRemoveButton = document.createElement("button");
    bookRemoveButton.classList.add("remove-button");
    bookRemoveButton.setAttribute("type", "submit");
    bookRemoveButton.innerHTML = "&times;";

    // Edit Pages Read Form
    const bookForm = document.createElement("form");
    bookForm.classList.add("update-pages-form");
    const updatePagesLabel = document.createElement("label");
    updatePagesLabel.setAttribute("for", "update-pages-read");
    updatePagesLabel.innerHTML = "Update Pages Read";
    const updatePagesInput = document.createElement("input");
    updatePagesInput.setAttribute("id", "update-pages-read");
    // Confirm Edit Button
    const bookUpdateButton = document.createElement("button");
    bookUpdateButton.classList.add("update-button");
    bookUpdateButton.setAttribute("form", "update-pages-form");
    bookUpdateButton.innerHTML = "Confirm";

    // Remove Button Functionality
    bookRemoveButton.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.parentElement.remove();
    });

    // Edit Pages Functionality
    bookUpdateButton.addEventListener("click", () => {
      const updatedValue = updatePagesInput.value;

      if (updatedValue === "") {
        console.log("true1");
        return;
      } else if (isNaN(updatedValue) === true) {
        console.log("true4");
        return;
      } else if (parseInt(updatedValue) < 0) {
        console.log("true2");
        return;
      } else if (parseInt(updatedValue) > book.pages) {
        console.log("true3");
        return;
      }

      book.pagesRead = updatedValue;
      pagesReadText.textContent = `Pages Read: ${book.pagesRead}`;
    });

    // Append HTML Elements Together
    bookForm.append(updatePagesLabel, updatePagesInput);
    buttonDiv.append(bookRemoveButton, bookUpdateButton);
    bookDescription.append(titleText, authorText, pagesText, pagesReadText);
    bookRemove.append(bookForm, buttonDiv);
    bookCard.append(bookDescription, bookRemove);
    libraryDisplay.appendChild(bookCard);
  });
}