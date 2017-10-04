
/* An object consists of properties which are key:value pairs (or name:value pairs). */

var myComputer = {
	operatingSystem: 'mac',
	screenSize: '13 inch',
	purchaseYear: 2015
}

// A 'method' is an object property that is a function (very common in JS)

var gordan = {
	name: 'Gordan',
	sayName: function() {
		console.log(this.name);
	}
}  // So, sayName is a method on the Gordon object


// It should store the todos array on an object
var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function () {
    console.log('My todos:', this.todos);
  },
  // It should have an addTodo method
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  // It should have a changeTodo method
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  // It should have a deleteTodo method
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};
