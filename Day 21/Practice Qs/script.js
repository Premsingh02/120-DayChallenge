//Q1 - Check if all numbers in our array are multiples of 10 or not.
let arr = [10,10,20,30,500];

let ans = arr.every((el) => {
    return el % 10 == 0;
})

console.log(ans);

//Q2 - Create a function to find the min number in an array.
let arr2 = [1,2,3,4,5];

let ans2 = arr2.reduce((min,el) => {
    if(min<el){
        return min;
    } else {
        return el;
    };
});

console.log(ans2);