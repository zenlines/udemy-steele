//Logic of bouncer at nightclub
//Conditionals review
//If <18, cannot enter. If in between 18-21, enter but cannot drink. If over 21, enter and drink
//bonus: if ID is invalid, cannot enter.

var id = prompt("Is your ID valid?");

while (id !== "Yes") {
  alert("Sorry, I can't let you in. Your ID is invalid. Please say \"Yes\"");
  console.log("Sorry, I can't let you in. Your ID is invalid. Please say \"Yes\"");
  var id = prompt("Is your ID valid?");
}

var age = Number(prompt("What is your age?"));

if(age < 0) {
  alert("Sorry, your ID says you have yet to be born, I can't let you in.");
  console.log("Sorry, your ID says you have yet to be born, I can't let you in.");
}
else if(age < 18) {
  alert("Sorry, but you don't meet the age limit to enter.");
  console.log("Sorry, but you don't meet the age limit to enter.");
}
else if(age < 21) {
  alert("You can come in, but no drinks. Let me just mark your hand first.");
    console.log("Come on in, let me just mark your hand first.");
}
else if(age == 21) {
  alert("Happy birthday! Have a drink on the house from one of our bartenders.");
  console.log("Happy birthday! Have a drink on the house from one of our bartenders.");
}
else if(age % 2 !== 0) {
  alert("Ha, your age is odd. Come on in pal.");
  console.log("Ha, your age is odd. Come on in pal.");
}
else if (age % Math.sqrt(age) === 0) {
  alert("Your age is a perfect square!");
  console.log("Your age is a perfect square!");
}
else {
  alert("Welcome, come on in!");
    console.log("Welcome, come on in!");
}
