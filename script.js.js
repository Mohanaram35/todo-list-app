document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.className = 'task-item';

        const span = document.createElement('span');
        span.className = 'task';
        span.textContent = taskText;
        li.appendChild(span);

        const removeButton = document.createElement('button');
        removeButton.className = 'removeButton';
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            li.remove();
        });
        li.appendChild(removeButton);

        li.addEventListener('click', () => {
            span.classList.toggle('complete');
        });

        return li;
    }

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskElement = createTaskElement(taskText);
            taskList.appendChild(taskElement);
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
