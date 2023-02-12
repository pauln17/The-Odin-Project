import { createParagraph } from './home.js';

export default function createMenuInfo() {
    // Create Section for Menu Information
    const sectionOne = document.createElement('div');
    sectionOne.classList.add('sectionOne');

    const information = document.createElement('div');
    information.classList.add('information');

    // Create Information
    const p = createParagraph('MENU!!!!');

    information.append(p);
    sectionOne.append(information);
    
    return sectionOne
}
