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
}