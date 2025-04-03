const input = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');
const addButton = document.getElementById('tasks__add');

function addTask(e) {
    e.preventDefault();

     if(input.value.trim() === '') {
        return;
     }

    const task = document.createElement('div');
    task.classList.add('task');
    task.innerHTML = `<div class="task__title">${input.value}</div><a href="#" class="task__remove">&times;</a>`

    taskList.appendChild(task);

    input.value = '';

    const removeButton = task.querySelector('.task__remove');
    removeButton.addEventListener('click', (e) => {
        e.preventDefault();
        task.remove();
    });
}

addButton.addEventListener('click', addTask);