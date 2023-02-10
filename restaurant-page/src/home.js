function createHome() {
    // Selecting Skeleton HTML 'Div'
    content = document.querySelector('#content');

    content.append(createNavBar());
    content.apend(createInformation());
}

function createNavBar() {
    // NavBar Elements
    navBar = document.createElement('div');
    navBar.classList.add('navBar');

    navBarContainer = document.createElement('div');
    navContainer.classList.add('navContainer')

    navHeader = document.createElement('h1');
    navHeader.innerHTML = 'STEAKHOUSE';

    // Unordered List and Header Links
    navTabs = document.createElement('ul');
    navLi = document.createElement('li');
    navLink = document.createElement('a');
    navLink.innerHTML = 'Home';
    navLi.append(navLink);
    navLi2 = document.createElement('li');
    navLink2 = document.createElement('a');
    navLink.innerHTML = 'Menu';
    navLi2.append(navLink2);
    navLi3 = document.createElement('li');
    navLink3 = document.createElement('a');
    navLink.innerHTML = 'About';
    navLi3.append(navLink3);

    // Appending Items to Content
    navTabs.append(navLi, navLi2, navLi3);
    navBarContainer.append(navHeader, navTabs);
    navBar.append(navBarContainer)
    
    return navBar
}

function createInformation() {
    // Create Section for Information
    sectionOne = document.createElement('div');
    sectionOne.classList.add('sectionOne');

    information = document.createElement('div');
    information.classList.add('information');

    // Create Information Text
    p = document.createElement('p');
    p.innerHTML = "Welcome to STEAKHOUSE, where the love for meat, quality ingredients, and impeccable cooking techniques come together to create the ultimate dining experience. Our menu showcases the finest cuts of beef, hand-selected from the best farms and ranches around the world, that are dry-aged to perfection to bring out their natural flavors and tenderness.";
    p2 = document.createElement('p');
    p2.innerHTML = "Our chefs are masters of the grill, combining their knowledge and expertise with the right seasonings, sauces, and accompaniments to create dishes that are not just delicious, but also visually stunning. From classic cuts like ribeye and filet mignon, to more exotic options like tomahawk and hanger steak, our menu offers something for everyone.";
    p3 = document.createElement('p');
    p3.innerHTML = "At STEAKHOUSE, we believe in providing not just great food, but also a memorable dining experience. Our elegant and sophisticated dining room is the perfect setting for an intimate evening, a special celebration, or a business dinner. Our friendly and professional staff will ensure that your every need is met, and that you have a memorable time.";
    p4 = document.createElement('p');
    p4.innerHTML = "We invite you to join us at STEAKHOUSE and experience steak like never before. From the moment you walk in, to the last bite of dessert, we guarantee you'll be satisfied with your meal and the exceptional service. Book your table today and discover why we are considered one of the best steak houses in the world.";
    
    information.append(p, p2, p3, p4);
    sectionOne.append(information);
    
    return sectionOne
}

export { createHome }