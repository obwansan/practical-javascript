/** V4 Requirements
* todoList.addTodo should add objects
* todoList.changeTodo should change the Text property
* todoList.toggleCompleted should change the completed property
**/

var todoList = {
  todos: [],
  displayTodos: function () {
    console.log('My todos:', this.todos);
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
  }
};