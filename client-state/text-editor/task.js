const editor = document.getElementById('editor');

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('value')) {
        editor.value = localStorage.getItem('value');
    };
});

editor.addEventListener('input', () => {
    const editorValue = editor.value;
    localStorage.setItem('value', editorValue);
});

const button = document.querySelector('.button');

button.addEventListener('click', () => {
    editor.value = '';
    localStorage.removeItem('value');
});
