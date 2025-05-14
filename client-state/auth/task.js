const form = document.getElementById('signin__form');
const formContainer = form.closest('.signin');
const welcome = document.getElementById('welcome');

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('user_id')) {
        formContainer.classList.remove('signin_active');
        welcome.querySelector('#user_id').textContent = localStorage.user_id;
        welcome.classList.add('welcome_active');
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.send(formData);

    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            const response = JSON.parse(xhr.responseText);

            if (response.success) {
                formContainer.classList.remove('signin_active');

                localStorage.setItem('user_id', response.user_id);

                welcome.querySelector('#user_id').textContent = localStorage.user_id;
                welcome.classList.add('welcome_active');
            } else {
                alert('Неверный логин/пароль');
            }

        } else {
            console.log('Получена ошибка от сервера');
        }
    });
});