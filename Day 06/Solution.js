// 1. Write a JavaScript function to check whether an `input` is an array or not

var is_array = function (input) {
  return Array.isArray(input);
};

console.log(is_array("w3resource"));
console.log(is_array([1, 2, 4, 0]));

// 2. Write a JavaScript function to clone an array

function array_Clone(input) {
  var arr = [];
  input.forEach((element) => {
    arr.push(element);
  });
  return arr;
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

// 3. Write a JavaScript function to get the first element of an array. Passing a
// parameter 'n' will return the first 'n' elements of the array.

function first(arr, n) {
  if (n == null) return arr[0];
  if (n < 0) return [];
  return arr.slice(0, n);
}

console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));

// Write a simple JavaScript program to join all elements of the following
// array into a string.

myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString("/"));
console.log(myColor.join());
console.log(myColor.join("/"));

// Write a JavaScript program to find the most frequent item of an array

var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
const len = arr1.length;
let count = -1;
let temp = 0;
let element;

for (let i = 0; i < len; i++) {
  temp = 0;
  for (let j = 0; j < len; j++) {
    if (arr1[i] == arr1[j]) {
      temp++;
    }
  }
  if (temp > count) {
    count = temp;
    element = arr1[i];
  }
}
console.log(element + "( " + count + " times)");
