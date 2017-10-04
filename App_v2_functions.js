var todos = ['item 1', 'item 2', 'item 3'];

// It should have a funcion to display todos
function displayTodos () {
    console.log('My todos: ', todos);
}

// It should have a function to add todos
function addTodo (newItem) {
	todos.push(newItem);
	displayTodos();
}

// It should have a function to change todos
function changeTodo (position, newValue) {
	todos[position] = newValue;
	displayTodos();
}

// It should have a function to delete todos
function deleteTodo (position) {
	todos.splice(position, 1);
	displayTodos();
}