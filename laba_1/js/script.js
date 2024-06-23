document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    const surname = document.querySelector('#surname').value;
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phoneNumber').value;
    const about = document.querySelector('#aboutYou').value;

    const checkBox = document.querySelector('#checkboxStud');
    const thirdRadioButton = document.querySelector('#radio3');
    const Sity = document.querySelector('#selectSity');

    let trouble1 = document.getElementById("trouble1");
    let trouble2 = document.getElementById("trouble2");
    let trouble3 = document.getElementById("trouble3");
    let trouble4 = document.getElementById("trouble4");
    let trouble5 = document.getElementById("trouble5");

    if (!checkBox.checked || !thirdRadioButton.checked || Sity.value != "Минск") {
        if (!confirm('Вы подтверждаете операцию?')) {
            return true;
        }
    }

    if (surname != "") {

        if (!validationName(surname)) {
            visibleDiv(trouble1, "Фамилия и имя должны содержать только символы русского и английского алфавита и не превышать 20 символов");
        }
        else {
            heidenDiv(trouble1);
        }
    }
    else {
        visibleDiv(trouble1, 'Заполните полe формы!');
    }

    if (name != "") {

        if (!validationName(name)) {
            visibleDiv(trouble2, "Фамилия и имя должны содержать только символы русского и английского алфавита и не превышать 20 символов");
        }
        else {
            heidenDiv(trouble2);
        }
    }
    else {
        visibleDiv(trouble2, 'Заполните полe формы!');
    }

    if (email != "") {

        if (!validationEmail(email)) {
            visibleDiv(trouble3, "Введите корректный E-mail!");
        }
        else {
            heidenDiv(trouble3);
        }
    }
    else {
        visibleDiv(trouble3, 'Заполните полe формы!');
    }

    if (phone != "") {

        if (!validationPhone(phone)) {
            visibleDiv(trouble4, "Неправильный формат телефона");
        }
        else {
            heidenDiv(trouble4);
        }
    }
    else {
        visibleDiv(trouble4, 'Заполните полe формы!');
    }

    if (about != "") {

        if (!validationAbout(about)) {
            visibleDiv(trouble5, "Длинна превышает 250 символов");
        }
        else {
            heidenDiv(trouble5);
        }
    }
    else {
        visibleDiv(trouble5, 'Заполните полe формы!');
    }

});

function visibleDiv(setupStyle, text) {
    setupStyle.style.display = "flex";
    setupStyle.innerHTML = text;
    setupStyle.style.color = "red";
}

function heidenDiv(setupStyle) {
    setupStyle.style.display = "none";
    setupStyle.innerHTML = "";
}

function validationName(name) {
    const nameRegex = /^[а-яА-Яa-zA-Z]{1,20}$/;
    if (!nameRegex.test(name)) {
        return false;
    }
    return true;
}

function validationEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return false;
    }
    return true;
}

function validationPhone(phone) {
    var phoneRegex = /^\(0\d{2}\)\d{3}-\d{2}-\d{2}$/;
    if (!phoneRegex.test(phone)) {
        return false;
    }
    return true;
}

function validationAbout(aboutYou) {
    if (aboutYou.length > 250) {
        return false;
    }
    return true;
}