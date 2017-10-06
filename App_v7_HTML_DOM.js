/**
* v7 Requirements
* There should be a 'Display todos' button and a 'Toggle all' button in the app.
* Clicking 'Display todos' should run todoList.displayTodos.
* CLicking 'Toggle all' should run todoList.toggleAll.
**/

var todoList = {
  todos: [],
  displayTodos: function () {
    console.log('My todos:');
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!');
    } else {
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log('(x) ', this.todos[i].todoText);
        } else {
          console.log('( ) ', this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    }),
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position]; // todo is the object at whichever position in array
    todo.completed = !todo.completed; // so can access the completed property with dot notation
    this.displayTodos();
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    // get number of completed todos
    for (var i = 0; i < totalTodos; i++) {
        if (this.todos[i].completed === true) {
          completedTodos++;
        }
      }
    // if all todos completed, make all uncompleted
    if (completedTodos === totalTodos) {
      for (var j = 0; j < totalTodos; j++) {
        this.todos[j].completed = false;
      }
      // otherwise, make all todos completed
    } else {
        for (var k = 0; k < totalTodos; k++) {
          this.todos[k].completed = true;
      }
    }
    this.displayTodos();
  }
};

// Clicking 'Display todos' should run todoList.displayTodos.
var displayTodosButton = document.getElementById('displayTodosButton');

displayTodosButton.addEventListener('click', function() {
  todoList.displayTodos();
});

// Clicking 'Toggle all' should run todoList.toggleAll.
var toggleAllButton = document.getElementById('toggleAllButton');

toggleAllButton.addEventListener('click', function() {
  todoList.toggleAll();
})
