let email = document.querySelector('.email');
let password = document.querySelector('.password');
let btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    if (email.value.length == '') {
        alert('Введите логин');
    } else if (password.value.length < 7 || password.value.length > 15) {
        alert('Введите пароль от 7 до 15 символов');
    } else if (!(/[A-Z]/.test(password.value))) {
        alert('Пароль должен содержать хотя бы одну букву английского алфавита в верхнем регистре');
    } else if (!(/[a-z]/.test(password.value))) {
        alert('Пароль должен содержать хотя бы одну букву английского алфавита в нижнем регистре');
    } else if (!(/[0-9]/.test(password.value))) {
        alert('Пароль должен содержать хотя бы одну цифру');
    } else if (!(/[!"£$%^&*()]/.test(password.value))) {
        alert('Пароль должен содержать хотя бы один спецсимвол');
    } else if ((/[^!"£$%^&*()A-Z-a-z-0-9]/.test(password.value))) {
        alert('Пароль содержит недопустимые символы');
    } else {
       localStorage.setItem(email.value, password.value);
       console.log(localStorage.getItem(email.value));
       location.href = '/';
    }
});
