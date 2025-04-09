const xhr = new XMLHttpRequest();
const poll = document.querySelector('.poll');
const pollTitle = poll.querySelector('.poll__title');
const pollAnswers = poll.querySelector('.poll__answers')

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const response = JSON.parse(xhr.responseText);
        const responseData = response.data;

        pollTitle.textContent = responseData.title;

        responseData.answers.forEach(answer => {
            const button = document.createElement('button');
            button.classList.add('poll__answer');
            button.textContent = answer;
            pollAnswers.appendChild(button);
        });

        [...pollAnswers.children].forEach(button => {
            button.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
            });
        });
    }
});



