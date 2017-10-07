/**
* v8 Getting data from inputs
* It should have working controls for .addTodo
* It should have working controls for .changeTodo
* It should have working controls for .deleteTodo
* It should have working controls for .toggleCompleted
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
    });
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
    var todo = this.todos[position]; 
    todo.completed = !todo.completed; 
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

var handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = "";
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = "";
    changeTodoTextInput.value = "";
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = "";
  },
  toggleCompleted: function() {
    var toggleTodoCompletedInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleTodoCompletedInput.valueAsNumber);
    toggleTodoCompletedInput.value = "";
  },
  toggleAll: function() {
    todoList.toggleAll();
  }
};

