// Purpose: To add a task to the list and remove it by double clicking on it.
let addTask = document.getElementById('add-task');
let taskInput = document.getElementById('input');
let taskList = document.getElementById('list-task-container');


function addTaskToList() {
    if (taskInput.value.trim() === '') return;
    var para = document.createElement('p');
    para.innerText = taskInput.value;
    taskList.appendChild(para);
    taskInput.value = '';
    para.addEventListener('click', function() {
        para.style.textDecoration = 'line-through';
    })
    para.addEventListener('dblclick', function() {
        taskList.removeChild(para);
    })
}

addTask.addEventListener('click', addTaskToList);

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTaskToList();
    }
});
