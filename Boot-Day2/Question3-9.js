var arr = [7,9,12,15,22,6,17,12,11];
console.log("Original Array",arr);

// Add a number to the end of the array.
arr.push(113);
console.log("pushing 113 at the end",arr);

// Remove the first number from the array.
arr.shift()
console.log("removing first element",arr);

// Insert a number at a specific index.
arr.splice(2,0,79);
console.log("inserting 79 at index 2",arr);

// Replace all occurrences of a number with another number.
for(var i = 0; i<arr.length; i++){
    if(arr[i] == 12){
        arr[i] = 120;
    }
}
console.log('replacing all occurances of 12 with 120',arr);

// Sort the array in ascending order(without using sort())
for (var i = 0; i < arr.length - 1; i++) {
  for (var j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      var temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log("sorted array",arr);

// Reverse the array.(without using reverse())
var start = 0;
var end = arr.length-1;

while(start<end){
    var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
}
console.log("reversed the array",arr);

// Find the index of a specific number.

console.log("index of 79:", arr.indexOf(79));


