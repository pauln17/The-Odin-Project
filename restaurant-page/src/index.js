import createHomeInfo from './modules/home';
import createMenuInfo from './modules/menu';
import './styles.css';
import steak from './images/steak.jpg';
import steakItem from './images/steak-item.jpg';

function createNavBar() {
    // NavBar Elements
    const navBar = document.createElement('div');
    navBar.classList.add('navBar');

    const navHeader = document.createElement('h1');
    navHeader.innerHTML = 'STEAKHOUSE';

    const navContainer = document.createElement('div');
    navContainer.classList.add('navContainer');

    // Unordered List and Header Links
    const navTabs = document.createElement('ul');
    navTabs.classList.add('navTabs');

    const navLi = document.createElement('li');
    const navLink = document.createElement('a');
    navLink.classList.add('home');
    navLink.innerHTML = 'Home';
    navLi.append(navLink);

    const navLi2 = document.createElement('li');
    const navLink2 = document.createElement('a');
    navLink2.classList.add('menu');
    navLink2.innerHTML = 'Menu';
    navLi2.append(navLink2);

    const navLi3 = document.createElement('li');
    const navLink3 = document.createElement('a');
    navLink3.classList.add('contact');
    navLink3.innerHTML = 'Contact';
    navLi3.append(navLink3);

    // Appending Items to Content
    navTabs.append(navLi, navLi2, navLi3);
    navContainer.append(navHeader, navTabs);
    navBar.append(navContainer);
    
    return navBar
}

function initializeWebsite() {
    const content = document.querySelector('#content');
    
    content.append(createNavBar());
    content.append(createHomeInfo());

    const homeTab = document.querySelector('.home');
    const menuTab = document.querySelector('.menu');
    const contactTab = document.querySelector('.contact');

    homeTab.addEventListener('click', () => {
        content.removeChild(content.children[1]);
        content.append(createHomeInfo());
    })

    menuTab.addEventListener('click', () => {
        content.removeChild(content.children[1]);
        content.append(createMenuInfo());
    })
}

initializeWebsite();