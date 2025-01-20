// Purpose: To add a task to the list, edit it by double clicking, and remove it by clicking the remove button or pressing the delete key.
let addTask = document.getElementById('add-task');
let removeTask = document.getElementById('remove-task');
let clearAll = document.getElementById('clear-all');
let markAll = document.getElementById('mark-all');
let taskInput = document.getElementById('input');
let taskList = document.getElementById('list-task-container');
let selectedTask = null;

function addTaskToList() {
    if (taskInput.value.trim() === '') return;
    var para = document.createElement('p');
    para.innerText = taskInput.value;
    taskList.appendChild(para);
    taskInput.value = '';

    para.addEventListener('click', function () {
        para.style.textDecoration = 'line-through';
        selectedTask = para;
    });

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
    });
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Delete' && selectedTask) {
        taskList.removeChild(selectedTask);
        selectedTask = null;
    }
});

addTask.addEventListener('click', addTaskToList);

taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTaskToList();
    }
});

removeTask.addEventListener('click', function () {
    if (selectedTask) {
        taskList.removeChild(selectedTask);
        selectedTask = null;
    }
});

clearAll.addEventListener('click', function () {
    taskList.innerHTML = '';
    selectedTask = null;
});

markAll.addEventListener('click', function () {
    let tasks = taskList.getElementsByTagName('p');
    for (let task of tasks) {
        task.style.textDecoration = 'line-through';
    }
});
