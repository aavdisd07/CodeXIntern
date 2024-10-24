// Array to hold the list of todos
let todos = [];

// Function to add a new todo
function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();

    if (todoText === '') {
        alert('Please enter a todo!');
        return;
    }

    const newTodo = {
        id: Date.now(),   // Unique ID for the todo
        text: todoText,
        completed: false  // Initially, todo is not completed
    };

    todos.push(newTodo);  // Add new todo to the list
    todoInput.value = ''; // Clear the input field
    renderTodos();        // Update the displayed list
}

// Function to delete a todo
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id); // Remove the todo with matching ID
    renderTodos(); // Update the displayed list
}

// Function to toggle the completed status of a todo
function toggleComplete(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            todo.completed = !todo.completed; // Toggle the completion status
        }
        return todo;
    });
    renderTodos(); // Update the displayed list
}

// Function to edit a todo
function editTodo(id) {
    const newTodoText = prompt('Edit your todo:');
    if (newTodoText.trim() === '') {
        alert('Todo cannot be empty.');
        return;
    }
    todos = todos.map(todo => {
        if (todo.id === id) {
            todo.text = newTodoText; // Update the todo text
        }
        return todo;
    });
    renderTodos(); // Update the displayed list
}

// Function to display todos on the page
function renderTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = ''; // Clear the current list

    todos.forEach(todo => {
        const todoItem = document.createElement('li'); // Create a new list item

        // Apply 'completed' class if the todo is marked as done
        todoItem.classList.toggle('completed', todo.completed);

        todoItem.innerHTML = `
    <span>${todo.text}</span>
    <div>
        <button class="complete" data-tooltip="Mark as Read" onclick="toggleComplete(${todo.id})">
            <i class="fas ${todo.completed ? 'fa-envelope-open' : 'fa-envelope'}"></i>
        </button>
        <button class="edit" data-tooltip="Edit" onclick="editTodo(${todo.id})">
            <i class="fas fa-edit"></i>
        </button>
        <button class="delete" data-tooltip="Delete" onclick="deleteTodo(${todo.id})">
            <i class="fas fa-trash-alt"></i>
        </button>
    </div>
`;


        todoList.appendChild(todoItem); // Append to the list
    });
}
