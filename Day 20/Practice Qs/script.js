// Q1 - Write an arrow function that returns the square of a number 'n'.
const result = (n) => {
    return n * n;
}
console.log(result(6));

// Q2 - Write a function that prints "Hello Wrold" 5 times at intervals of 2s each.
let id = setInterval(() => {
    console.log("Hello World");
}, 2000);

setTimeout(() => {
    clearInterval(id);
}, 10000);

// Q3
const arrayAverage = (arr) => {
    let average = 0;
    for(let i=0; i<arr.length; i++){
        average+= arr[i];
    }
    return average / arr.length;
}

let arr = [1,2,3,4,5,6];

console.log(arrayAverage(arr));

//Q4
const isEven = (n) => {
    if(n%2==0){
        return true;
    } else {
        return false;
    }
}

console.log(isEven(23));