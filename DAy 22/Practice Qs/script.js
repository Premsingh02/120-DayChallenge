//Q1 - Square and sum the array elements using the arrow function and then find the
// average of the array.
let arr = [1,2,3,4,5];

const square = arr.map((el) => el * el);
console.log(square);

let sum = square.reduce((acc,cur) => acc + cur, 0);
console.log(sum);

let avg = sum / arr.length;
console.log(avg);

//Q2 - Create a new array using the map function whose each element is equal to the
// original element plus 5.
let numbers = [2,4,6,7,-2,-4];
console.log(numbers.map((number) => number + 5));