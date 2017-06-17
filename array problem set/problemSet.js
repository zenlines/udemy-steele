//take array as argument, print elements of array in reverse order (do not alter order of actual array)
function printReverse(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    console.log(sampleArray[i]);
  }
}

//take array as argument, return true if all array elements are identical, false otherwise
function isUniform(arr) {
  var value = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== value) {
      return false;
    }
    else {
      return true;
    }
  }
}

//take array of numbers and return sum of all numbers in array
function sumArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}

//take array of numbers and returns highest number in array
function max(arr) {
  var highNum = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > highNum) {
      highNum = arr[i];
    }
  }
  console.log(highNum);
}
