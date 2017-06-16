var tasks = ["Buy new turtle"];

var input = prompt("What would you like to do?");

 while(input !== "quit") {
   if(input === "list") {
     listTasks();
   }
    else if(input === "new") {
      addTask();
    }
    else if(input === "delete") {
      deleteTask();
    }
    input = prompt("What would you like to do?");
 }
 console.log("Goodbye!")



function listTasks() {
  console.log("**********");
  tasks.forEach(function(task, index) {
    console.log(index + ": " + task);
  });
  console.log("**********");
}

function addTask() {
  var newTask = prompt("Enter new task");
  tasks.push(newTask);
}

function deleteTask() {
  var index = prompt("Enter index of task to delete");
  tasks.splice(index, 1);
  console.log("Deleted task at " + index);
}
