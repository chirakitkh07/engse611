const form = document.querySelector("form");
const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

let todos = [];

function addTodo() {
  const todoText = todoInput.value.trim();

  // เช็คความยาวของข้อความต้องไม่เกิน 50 ตัวอักษร
  if (todoText.length === 0) {
    alert("Please enter a task.");
    return;
  }

  if (todoText.length > 50) {
    alert("Task should not be more than 50 characters.");
    return;
  }

  const todo = {
    id: Date.now(),
    text: todoText,
    completed: false,
  };

  todos.push(todo);
  todoInput.value = "";
  renderTodos();
}

function deleteTodo(id) {
  if (confirm("Are you sure you want to delete this task?")) {
    todos = todos.filter((todo) => todo.id !== id);
    renderTodos();
  }
}

function toggleCompleted(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }
    return todo;
  });
  renderTodos();
}

function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const todoItem = document.createElement("li");
    const todoText = document.createElement("span");
    const todoDeleteButton = document.createElement("button");
    const todoCheckbox = document.createElement("input");

    todoText.textContent = todo.text;
    todoDeleteButton.textContent = "Delete";
    todoCheckbox.type = "checkbox";
    todoCheckbox.checked = todo.completed;

    todoDeleteButton.addEventListener("click", () => deleteTodo(todo.id));
    todoCheckbox.addEventListener("change", () => toggleCompleted(todo.id));

    if (todo.completed) {
      todoItem.classList.add("completed");
    }

    todoItem.appendChild(todoCheckbox);
    todoItem.appendChild(todoText);
    todoItem.appendChild(todoDeleteButton);

    todoList.appendChild(todoItem);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo();
});

renderTodos();