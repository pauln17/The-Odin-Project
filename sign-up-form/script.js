const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const email = document.querySelector("#user_email");
const phoneNumber = document.querySelector("#user_tel");
const password = document.querySelector("#pw");
const password_confirm = document.querySelector("#pw_confirmation");
const pw_textErr = document.querySelector(".pwError");
const tel_textErr = document.querySelector(".telError");


let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
email.addEventListener("input", () => {
    const user_input = email.value;

    email.classList.remove('valid');
    email.classList.remove('error');

    if (user_input.length === 0) {
        return;
    }

    let validEmail = emailRegex.test(user_input);
    if (validEmail === true) {
        email.classList.add('valid');
    }
    else {
        email.classList.add('error');
    }
});


let phoneNumberRegex = /^[0-9]{10}$/;
phoneNumber.addEventListener("input", () => {
    const user_input = phoneNumber.value;

    tel_textErr.textContent = ' ';
    phoneNumber.classList.remove('valid');
    phoneNumber.classList.remove('error');

    if (user_input.length === 0) {
        return;
    }

    let validPhoneNumber = phoneNumberRegex.test(user_input);
    if (validPhoneNumber !== true) {
        phoneNumber.classList.add('error');
        tel_textErr.textContent = 'Enter a 9 digit phone number'
        tel_textErr.setAttribute('style', 'font-size: 12px;')
    } 
    else {
        phoneNumber.classList.add('valid')
    }
});



const checkPassword = function () {
    const user_input = password_confirm.value;

    pw_textErr.textContent = ' ';
    password_confirm.classList.remove('valid');
    password_confirm.classList.remove('error');
    password.classList.remove('valid')
    password.classList.remove('error');

    if (user_input.length === 0) {
        return;
    }

    if (user_input !== password.value) {
        password_confirm.classList.add('error');
        password.classList.add('error');
        pw_textErr.textContent = 'Passwords do not match';
        pw_textErr.setAttribute('style', 'font-size: 12px;')
        return false;
    }
    else {
        password_confirm.classList.add('valid')
        password.classList.add('valid');
        pw_textErr.textContent = ' ';
        return true;
    }
}

password.addEventListener("input", checkPassword)
password_confirm.addEventListener("input", checkPassword);