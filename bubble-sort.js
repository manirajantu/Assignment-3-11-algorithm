// Task 1: To implement bubble sort and return a new sorted array as the result without modifying the array parameter.

//Task 2: To determine the 3 cases of Big O Notation

function bubbleSort(array) {
  //implement code here



  let toBeSortedArray = [];// Task 1: To implement bubble sort and return a new sorted array as the result without modifying the array parameter.

//Task 2: To determine the 3 cases of Big O Notation

function swapElement(array, x, y) {
  let element = array[x]; // 1
  array[x] = array[y]; // 1
  array[y] = element; // 1
}

function bubbleSort(array) {
  //implement code here
  let toBeSortedArray = array; // 1
  let arraySize = toBeSortedArray.length; // N

  for (let i = 0; i < arraySize - 1; i++) {  // N
    for (let j = 0; j < arraySize - i - 1; j++) { // N
      if (toBeSortedArray[j] > toBeSortedArray[j + 1]) { // N
        swapElement(toBeSortedArray, j, j + 1); // N
      }
    }
  }

  return toBeSortedArray;
}
// Big O Notation
// Worse Case: O (4 + 5N)
// Average Case: O (1 + N)
// Best Case: O (N)

module.exports = bubbleSort;


  return toBeSortedArray;
}
// Big O Notation
// Worse Case: ?
// Average Case: ?
// Best Case: ?

module.exports = bubbleSort;
