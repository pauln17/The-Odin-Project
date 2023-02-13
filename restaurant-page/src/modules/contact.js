export default function createContactInfo() {
    // Create Section for Contact Information
    const sectionOne = document.createElement('div');
    sectionOne.classList.add('sectionOne');

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    const contactInfoContainer = document.createElement('div');
    contactInfoContainer.classList.add('contact-info-container');

    const location = document.createElement('div');
    location.classList.add('location');
    const locationText = document.createElement('h3');
    locationText.innerHTML = 'Location'
    const locationAddress = document.createElement('p');
    locationAddress.innerHTML = 'Address';

    const hours = document.createElement('div');
    hours.classList.add('hours');
    const hoursText = document.createElement('h3');
    hoursText.innerHTML = 'Hours'
    const hoursTime = document.createElement('p');
    hoursTime.innerHTML = 'Time';

    const contact = document.createElement('div');
    contact.classList.add('contact');
    const contactText = document.createElement('h3');
    contactText.innerHTML = 'Contact'
    const contactPhone = document.createElement('p');
    contactPhone.innerHTML = 'Phone Number';


    location.append(locationText, locationAddress);
    hours.append(hoursText, hoursTime);
    contact.append(contactText, contactPhone);
    contactInfoContainer.append(location, hours, contact);
    contactInfo.append(contactInfoContainer);
    sectionOne.append(contactInfo);
    
    return sectionOne
}