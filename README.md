# Dynamic Task Dashboard

A small task manager built with vanilla JavaScript to practice DOM manipulation, events, async code, ES6 classes, immutability, and JSON handling. No frameworks or libraries.

## Project Structure

```
assignment4/
├── index.html       # Page structure
├── styles.css       # Minimal styling
├── taskManager.js   # Task and TaskManager classes
├── api.js           # fetchTasks() simulated server request
└── main.js          # DOM rendering and event handling
```

## How It Works

- **Load Tasks** shows "Loading tasks..." while `fetchTasks()` waits 1500ms, then renders the tasks.
- The raw data goes through `JSON.stringify` and `JSON.parse` before being turned into `Task` instances.
- **Toggle** flips a task's completed state (completed tasks are shown with a line-through).
- **Delete** removes a task from the list.
- If loading fails, an error message appears in the status line.

## Key Concepts

- **Task:** `id` is read-only via `Object.defineProperty`. `toggle()` returns a new `Task`.
- **TaskManager:** `setTasks`, `addTask`, `removeTask`, and `toggleTask` never mutate the existing array. Each creates a new one using spread, `filter`, or `map`.
- **Async:** `fetchTasks()` returns a Promise, and `main.js` uses `async/await` with `try/catch`.
- **DOM:** Elements are built with `createElement` and `appendChild`, and events use `addEventListener` (no inline handlers).