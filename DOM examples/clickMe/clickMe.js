var button = document.querySelector("button");
var paragraph = document.querySelector("p");

//Click event listener
button.addEventListener("click", function() {
  paragraph.textContent = "Someone Clicked the Button!";
});
