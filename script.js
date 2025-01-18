// Purpose: To add a task to the list and remove it by double clicking on it.
let addTask = document.getElementById('add-task');
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
        // if (selectedTask && selectedTask !== para) {
        //     para.style.textDecoration = 'none';

        // }
        // if (selectedTask === para) {
        //     para.style.textDecoration = 'none';     
        //     selectedTask = para;
        // } else 
        {
            para.style.textDecoration = 'line-through';
            selectedTask = para;
        }
    })
    // para.addEventListener('dblclick', function () {
    //     taskList.removeChild(para);
    // })
    // Edit task on double-click (after removing the default double-click remove)
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
