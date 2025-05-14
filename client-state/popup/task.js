const modal = document.getElementById('subscribe-modal');

document.addEventListener('DOMContentLoaded', () => {
    if (!document.cookie.includes('closed=true')) {
        setTimeout(() => modal.classList.add('modal_active'), 1000);
    }
});

const modalClose = document.querySelector('.modal__close');

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    document.cookie = 'closed=true; max-age=31536000';
    console.log(document.cookie);
});