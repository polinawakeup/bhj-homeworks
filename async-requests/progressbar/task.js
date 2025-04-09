const form = document.forms['form'];
const progress = document.getElementById( 'progress' );

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    
    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
            const percent = e.loaded / e.total;
            progress.value = percent;
        };
    });

    xhr.addEventListener('load', () => {
        progress.value = 0.0;
        document.querySelector('.input__wrapper-desc').textContent = 'Имя файла';
        alert('Загрузка завершена');
    })

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);
});
