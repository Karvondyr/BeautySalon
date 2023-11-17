document.addEventListener('DOMContentLoaded', function () {
    const email_input = document.getElementById('email');
    const email_error = document.getElementById('email-error');
    const password_input = document.getElementById('password');
    const password_error = document.getElementById('password-error');
    const firstname_input = document.getElementById('firstname');
    const firstname_error = document.getElementById('firstname-error');
    const lastname_input = document.getElementById('lastname');
    const lastname_error = document.getElementById('lastname-error');
    const middlename_input = document.getElementById('middlename');
    const middlename_error = document.getElementById('middlename-error');
    const birthdate_input = document.getElementById('birthdate');


    function email_error_message() {
        const message = 'Невірна електронна пошта';
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

        if (emailRegex.test(email_input.value.toLowerCase())) {
            email_error.innerHTML = '';
        } else {
            email_error.innerHTML = message;
        }
    }

    function password_error_message() {
        const message = 'Пароль має містити 8 або більше символів';

        if (password_input.value.toString().length >= 8) {
            password_error.innerHTML = '';
        } else {
            password_error.innerHTML = message;
        }
    }

    function firstname_error_message() {
        const message = 'Ім\'я не має містити цифри або спеціальні символи';
        const firstnameRegex = /(\d|[-#!@$%^&*()_+|~=`{}\[\]:";'<>?,.\/])+/

        if (!firstnameRegex.test(firstname_input.value.toLowerCase())) {
            firstname_error.innerHTML = '';
        } else {
            firstname_error.innerHTML = message;
        }
    }

    function lastname_error_message() {
        const message = 'Прізвище не має містити цифри або спеціальні символи';
        const lastnameRegex = /(\d|[-#!@$%^&*()_+|~=`{}\[\]:";'<>?,.\/])+/

        if (!lastnameRegex.test(lastname_input.value.toLowerCase())) {
            lastname_error.innerHTML = '';
        } else {
            lastname_error.innerHTML = message;
        }
    }

    function middlename_error_message() {
        const message = 'По-батькові не має містити цифри або спеціальні символи';
        const middlenameRegex = /(\d|[-#!@$%^&*()_+|~=`{}\[\]:";'<>?,.\/])+/

        if (!middlenameRegex.test(middlename_input.value.toLowerCase())) {
            middlename_error.innerHTML = '';
        } else {
            middlename_error.innerHTML = message;
        }
    }

    let date = new Date();
    date.setDate(date.getDate() + 1);
    date = date.toJSON();
    birthdate_input.max = date.split('T')[0];

    email_input.addEventListener('input', email_error_message);
    password_input.addEventListener('input', password_error_message);
    firstname_input.addEventListener('input', firstname_error_message);
    lastname_input.addEventListener('input', lastname_error_message);
    middlename_input.addEventListener('input', middlename_error_message);
});