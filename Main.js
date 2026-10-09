// DOM REFERENCES
const loadTaskBtn = document.getElementById("loadTaskBtn");
const statusMessage = document.getElementById("statusMessage");
const taskList = document.getElementById("taskList");

const manager =TaskManager();

// Rendering
function renderTasks() {
  // Clear the old list
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
 
  manager.tasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    if (task.completed) {
      taskDiv.classList.add("completed");
    }
 
    const titleSpan = document.createElement("span");
    titleSpan.textContent = task.title;
 
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle";
    toggleBtn.addEventListener("click", () => {
      manager.toggleTask(task.id);
      renderTasks();
    });
 
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      manager.removeTask(task.id);
      renderTasks();
    });
 
    taskDiv.appendChild(titleSpan);
    taskDiv.appendChild(toggleBtn);
    taskDiv.appendChild(deleteBtn);
    taskList.appendChild(taskDiv);
  });
}
 // Loading
async function loadTasks() {
    statusMessage.classList.remove("error");
    statusMessage.textContent = "Loading tasks...";
    loadTaskBtn.disabled = true;

    try {
        const rawTasks = await fetchTasks();

        //JSON round trip
        const json = JSON.stringify(rawTasks);
        const parsed = JSON.parse(json);

        // Converting plain objects into Tasks
        const tasks = parsed.map(
            (item) => new Task(item.id, item.title, item.completed)
        );

       manager.setTasks(tasks);
       renderTasks();
       statusMessage.textContent = "";
    } catch  (error) {
      statusMessage.classList.add("error");
      statusMessage.textContent = "Failed to load tasks" + error.message;
    } finally {
        loadTasksBtn.disabled = false;
      }
}

loadTaskBtn.addEventListener("click", loadTasks);