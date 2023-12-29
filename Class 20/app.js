const form = document.getElementById('taskForm');
const input = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');


form.addEventListener('submit', (e) => {
    e.preventDefault(); //Prevent default behavior of reloading a page after submit.
    const task = input.value;

    if(!task)
    {
        alert('Please add a task!');
        return;
    }

    // Task Div
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('tasks');

    // Task Content Div
    const taskContentDiv = document.createElement('div');
    taskContentDiv.classList.add('content');

    taskDiv.appendChild(taskContentDiv);

    // Task Input
    const taskInput = document.createElement('input');
    taskInput.type = 'text';
    taskInput.value = task;
    taskInput.setAttribute('readonly', 'readonly');

    taskContentDiv.appendChild(taskInput);


    // Task Actions
    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('actions');

    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.classList.add('edit');
    editButton.classList.add('btn');

    actionsDiv.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.classList.add('btn');

    actionsDiv.appendChild(deleteButton);

    // Appending actions into task content
    taskContentDiv.appendChild(actionsDiv);

    taskList.appendChild(taskDiv);

    // Clearing the Input bar
    input.value = '';


    // Editing a task
    editButton.addEventListener('click', (e) => {
        if(editButton.innerText.toLowerCase() === 'edit')
        {
            editButton.innerText = 'Save';
            taskInput.removeAttribute('readonly');
            taskInput.focus();
        }
        else
        {
            taskInput.innerText = 'Edit';
            taskInput.setAttribute('readonly', 'readonly');
        }
    });


    // Deleting a task
    deleteButton.addEventListener('click', (e) => {
        taskList.removeChild(taskDiv);
    })

});