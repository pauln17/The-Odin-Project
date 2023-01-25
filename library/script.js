// Add new item popup function
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