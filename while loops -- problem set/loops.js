console.log("Hi from the script");

//Problem one
console.log("Print all numbers between -10 and 19");

var count = -10

while (count <= 19) {
  console.log(count);
  count++;
}

//Problem two
console.log("Print all even numbers between 10 and 40");

var count = 10

while (count <= 40) {
  console.log(count);
  count+=2;
}

//Problem three
console.log("Print all odd numbers between 300 and 333");

var count = 300

while (count <= 333) {
  console.log(count + 1);
  count+=2;
}

//Problem four
console.log("Print all numbers divisible by 5 and 3, between 5 and 50");

var count = 5

while (count <= 50) {
  if (count % 3 === 0 && count % 5 === 0) {
    console.log(count);
}
  count++;
}
