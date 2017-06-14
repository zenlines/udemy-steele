function sing() {
  console.log("song verse one");
  console.log("song verse two");
}

setInterval(sing, 1000);

//anon function within a function, for the instance you only want to use the inner function once
setInterval(function(){
  console.log("I am an anon function");
  console.log("Other example text");
}, 2000);
