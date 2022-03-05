// const sumUp(x);
// start = performance.now();
// sumUp(100);
// end = performance.now();
// end - start


// function sumnumbers(numbers) {
//     return numbers[0] + numbers[1] + numbers[2];
// }

// function sumNumbers(numbers) {
//     let result = 0;
//     for (const number of numbers) {
//         result += number;
//     }
//     return result;

// } 
// T = O (3 + N) Linear time Complexity


function sumNumbers(numbers) {
return numbers.reduce((sum, curNum) => sum + curNum, 0);

} 



console.log(sumNumbers([1, 3, 10, 50]));