export default function createHomeInfo() {
    // Create Section for Home Information
    const sectionOne = document.createElement('div');
    sectionOne.classList.add('sectionOne');
    sectionOne.removeChild();

    const information = document.createElement('div');
    information.classList.add('information');

    // Create Information
    const p = createParagraph("Welcome to STEAKHOUSE, where the love for meat, quality ingredients, and impeccable cooking techniques come together to create the ultimate dining experience. Our menu showcases the finest cuts of beef, hand-selected from the best farms and ranches around the world, that are dry-aged to perfection to bring out their natural flavors and tenderness.");

    const p2 = createParagraph("Our chefs are masters of the grill, combining their knowledge and expertise with the right seasonings, sauces, and accompaniments to create dishes that are not just delicious, but also visually stunning. From classic cuts like ribeye and filet mignon, to more exotic options like tomahawk and hanger steak, our menu offers something for everyone.");

    const p3 = createParagraph("At STEAKHOUSE, we believe in providing not just great food, but also a memorable dining experience. Our elegant and sophisticated dining room is the perfect setting for an intimate evening, a special celebration, or a business dinner. Our friendly and professional staff will ensure that your every need is met, and that you have a memorable time.");

    const p4 = createParagraph("We invite you to join us at STEAKHOUSE and experience steak like never before. From the moment you walk in, to the last bite of dessert, we guarantee you'll be satisfied with your meal and the exceptional service. Book your table today and discover why we are considered one of the best steak houses in the world.");


    information.append(p, p2, p3, p4);
    sectionOne.append(information);
    
    return sectionOne
}

function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = text;
    
    return paragraph
}
