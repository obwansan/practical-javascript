Functions inside functions

//running the chrome console debugger on a function
runWithDebugger (ourFunction) {
	debugger;
	ourFunction();
};

runWithDebugger(ourFunction);

// setTimeout is a built-in JS function. 5000 ms = 5 seconds
setTimeout (function () {
	console.log('Wake up Gordon!');
}, 5000);

// creating a forEach function from scratch
function forEach(myArray, myFunction) {
	for (var i = 0; i < myArray.length; i++) {
		myFunction (myArray[i]);
	}
}
/* The argument passed to the myFunction parameter can be either 
the whole function or just the function name without parentheses. e.g. */

var students = ['jonathan', 'jenny', 'elliot'];

function forEach(students, function(student) {
	console.log(student);
});

// or 

function logName(name) {
	console.log(name);
};

function forEach(students, logName);

















