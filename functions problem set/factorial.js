function factorial(x) {
  if (x < 0) {
    console.log("Use a positive integer, please.");
    return undefined;
  }
  else if (x === 0) {
    return 1
  }
  else {
    return x * factorial(x-1)
  }
}

/*
"Official" solution below. I did not think of doing it in this manner at all really.
I did play with using a counter with a while loop to iterate the (x * (x-1)) from above,
but kept running into errors. Using a for loop would probably solve my issue, but
I stumbled upon the ability to call a function within a function and used that instead.
Gotta shake off the algebra cobwebs lol

function factorial(n) {
  var result = 1;

  for(var i = 1; i <=n; i++) {
    result = result * i; //can be shortened to "result *= i;"
  }
  return result;
}
*/
