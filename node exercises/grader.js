//function to take a single param: an array of test scores(all numbers)
//should return avg score in array, rounded to nearest whole number

var sum = 0;

function average (arr) {
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i]; 
    }
    console.log(Math.round(sum/arr.length));
}

var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores); //should return 94

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2); //should return 68