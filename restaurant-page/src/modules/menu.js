import { createParagraph } from './home.js';

export default function createMenuInfo() {
    // Create Section for Menu Information
    const sectionOne = document.createElement('div');
    sectionOne.classList.add('sectionOne');

    const menu = document.createElement('div');
    menu.classList.add('menu-info');

    sectionOne.append(menu);
    
    return sectionOne
}


