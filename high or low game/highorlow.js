var secretNumber = 88

var userNumber = Number(prompt("Enter a number."));

if (userNumber === secretNumber) {
  console.log("Wow, you got it!");
  alert("Wow, you got it!");
}

while (userNumber !== secretNumber) {
  if (userNumber < secretNumber) {
      console.log("Too low! Try a higher number.");
      alert("Too low! Try a higher number.");
    }
    else {
      console.log("Too high! Try a lower number.");
      alert("Too high! Try a lower number.");
    }
    var userNumber = Number(prompt("Enter a number."));
}
