var tasks = ["Buy new turtle"];

var input = prompt("What would you like to do?");

 while(input !== "quit") {
   if(input === "list") {
     console.log(tasks);
   }
    else if(input === "new") {
      var newTask = prompt("Enter new task");
      tasks.push(newTask);
    }
    input = prompt("What would you like to do?");
 }
 console.log("Goodbye!")
