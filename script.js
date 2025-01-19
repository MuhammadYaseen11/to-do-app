// Purpose: To add a task to the list and remove it by double clicking on it.
let addTask = document.getElementById('add-task');
let taskInput = document.getElementById('input');
let taskList = document.getElementById('list-task-container');
let selectedTask = null;

function addTaskToList() {
    if (taskInput.value.trim() === '') return;
    var para = document.createElement('p');
    para.innerText = taskInput.value;
    para.inner
    taskList.appendChild(para);
    taskInput.value = '';

    para.addEventListener('click', function () {
        {
            para.style.textDecoration = 'line-through';
            selectedTask = para;
        }
    })
    para.addEventListener('mouseover', function () {
        para.style.backgroundColor = '#f0f0f0';
    });

    para.addEventListener('mouseout', function () {
        para.style.backgroundColor = '';
    });
    para.addEventListener('dblclick', function () {
        const newTask = prompt("Edit your task:", para.innerText);
        if (newTask) {
            para.innerText = newTask;
            para.style.textDecoration = 'none';
            selectedTask = null;
        }
    })
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Delete' && selectedTask) {
        taskList.removeChild(selectedTask);
        
    }
});

addTask.addEventListener('click', addTaskToList);

taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTaskToList();
    }
});
