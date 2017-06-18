// var button = document.querySelector("button");
// var isPurple = false;

// button.addEventListener("click", function(){
//   if(isPurple) {
//     document.body.style.background = "white";
//   }
//   else {
//     document.body.style.background = "purple";
//   }
//   isPurple = !isPurple;
// });

var button = document.querySelector("button");

button.addEventListener("click", function() {
  document.body.classList.toggle("purple");
});

//below is my initial approach. does not work, pending a reason why
// var button = document.querySelector("button");
// var back = document.querySelector("body").style.background;
//
// button.addEventListener("click", function() {
//   if (back !== "white") {
//     document.body.style.background = "white";
//   }
//   else {
//     document.body.style.background = "purple";
//   }
// });
