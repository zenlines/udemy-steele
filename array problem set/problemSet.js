//take array as argument, print elements of array in reverse order (do not alter order of actual array)
var sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printReverse() {
  for (var i = sampleArray.length - 1; i >= 0; i--) {
    console.log(sampleArray[i]);
  }
}

//take array as argument, return true if all array elements are identical, false otherwise
function isUniform() {
  for (var i = 1; i < sampleArray.length; i++) {
    var value = sampleArray[0];
    if (sampleArray[i] !== value) {
      return false;
    }
    else {
      return true;
    }
  }
}

//take array of numbers and return sum of all numbers in array
function sumArray() {
  var sum = 0;
  for (var i = 0; i < sampleArray.length; i++) {
    sum += sampleArray[i];
  }
  console.log(sum);
}

//take array of numbers and returns highest number in array
function max() {
  var highNum = sampleArray[0];
  for (var i = 1; i < sampleArray.length; i++) {
    if (sampleArray[i] > highNum) {
      highNum = sampleArray[i];
    }
  }
  console.log(highNum);
}
