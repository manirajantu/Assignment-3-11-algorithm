// Task 1: To implement selection sort and return a new sorted array as the result without modifying the array parameter.

//Task 2: To determine the 3 cases of Big O Notation

function swapElement(array, x, y) {
  let element = array[x]; // 1
  array[x] = array[y]; // 1
  array[y] = element; // 1
}

function selectionSort(array) {
  //implement code here
  let toBeSortedArray = array; // 1
  let arraySize = array.length; // N
  let minIndex; // 1

  for (let i = 0; i < arraySize - 1; i++) { // N
    minIndex = i; // 1
    for (let j = i + 1; j < arraySize; j++) { // N
      if (toBeSortedArray[j] < toBeSortedArray[minIndex]) { // 1
        minIndex = j; // 1
      }
    }
    swapElement(toBeSortedArray, minIndex, i); // 1
  }

  return toBeSortedArray;
}
// Big O Notation
// Worse Case: O (9 + 3N)
// Average Case: O (3 + N)
// Best Case: O (3N)

module.exports = selectionSort;
