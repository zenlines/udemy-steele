var colors = ["red", "orange", "yellow"];
colors.push("green");
// adds "green" to end of array

var colors = ["red", "orange", "yellow"];
colors.pop();

var col = colors.pop();

/*
.push() <- filled in. adds item to end of array
.pop() <- left empty. removes last item from array
.unshift() <-filled in. adds item to beginning of array
.shift() <- left empty. removes first item from array
.indexOf() <- filled in. searches array for given value, ie "Mary". Returns index value of first found matching item.
           <- Returns -1 if not found.
.slice() <- filled in w/ index value range up to non-inclusive stop value. copies range of items to new array, items are not removed from first array.
