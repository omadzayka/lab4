// Task
class Task {
    constructor(id, title, completed) {
        //id is read-only
        Object.defineProperty(this, "id", {
            value: id,
            writable: false,
            configurable: false,
            enumarable: true,
        });

        this.title = title;
        this.completed = completed
    }

    // Returning a new Task with the flipped value
    toggle() {
        return new Task(this.id, this.title, !this.completed);
    }
}

// Task Manager 
class TaskManager{
    constructor() {
        this.tasks = [];
    }
    //Replacing tasks with the copy of the given Array
    setTasks(tasks) {
        this.tasks = [...tasks];
    }

    //Adding a task by creating a new array
    addTask(Task) {
        this.tasks = [...this.tasks, task];
    }
    //Remove a task by creating a new array
    removeTask(taskId) {
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
    }
    // Toggle one Task 
    toggleTask(taskId) {
        this.tasks = this.tasks.map((task) =>
            task.id === taskId ? task.toggle() : task
       );
    }
}