var str = "hello";

for(var i = 0; i < str.length; i++) {
  console.log(str[i]);
}

/* vs the below, using while:
var str = "hello";
var count = 0;

while(count < str.length) {
  console.log(str[count]);
  count++;
}
*/
