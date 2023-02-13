export default function createMenuInfo() {
    // Create Section for Menu Information
    const sectionOne = document.createElement('div');
    sectionOne.classList.add('sectionOne');

    const menu = document.createElement('div');
    menu.classList.add('menu-info');

    for (let i = 0; i < 4; i++) {
        menu.append(createMenuItem('Items', 'Ingredients', './images/steak-item.jpg'));
    }
    sectionOne.append(menu);
    
    return sectionOne
}

export function createMenuItem(item, ingredients, image) {
    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-item-container')

    const imgItem = document.createElement('img');
    imgItem.setAttribute('src', image);

    const itemInfo = document.createElement('div');
    itemInfo.classList.add('item-info');

    const itemName = document.createElement('h3');
    itemName.innerHTML = item;

    const itemText = document.createElement('p');
    itemText.innerHTML = ingredients;

    itemInfo.append(itemName, itemText);
    menuItems.append(imgItem, itemInfo);

    return menuItems;
}
