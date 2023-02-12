export default function createMenuInfo() {
    // Create Section for Menu Information
    const sectionOne = document.createElement('div');
    sectionOne.classList.add('sectionOne');
    sectionOne.removeChild();

    const information = document.createElement('div');
    information.classList.add('information');

    // Create Information


    // information.append(something);
    sectionOne.append(information);
    return sectionOne
}