// DOM REFERENCES
const loadTaskBtn = document.getElementById("loadTaskBtn");
const statusMessage = document.getElementById("statusMessage");
const taskList = document.getElementById("taskList");

const manager =TaskManager();

// Rendering
function renderTasks() {
    // Cleaning the old list
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}