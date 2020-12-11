// define variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('#tasks-list');

// define event listeners
// add task to list - submit button
form.addEventListener('submit', addTask);

// addTask function
function addTask(e) {
    // get value from form
    const taskInput = document.querySelector('#task').value;
    // create new ui object
    const ui = new UI();
    if (taskInput === '') {
        ui.alertMessage("Add task data!", "problem");
    } else {
        // create new task object with form data
        const task = new Task(taskInput);
        // add task object data to html list
        ui.addTaskToTable(task);
        // show ok alert messege
        ui.alertMessage("Added task to todo-list!", "ok");
        e.preventDefault();
    }
}