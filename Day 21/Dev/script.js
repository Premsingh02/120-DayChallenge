//Array Methods

//forEach
// let arr = [1,2,3,4,5];

// function print(el){
//     console.log(el);
// }

// arr.forEach(print);

//or

// arr.forEach(function(el){
//     console.log(el);
// });

// let arr = [{
//     name: "Aarav",
//     marks: 100,
// }, 
// {
//     name: "shradha",
//     marks: 94.4,
// },
// {
//     name: "rajat",
//     marks: 95,
// }];

// arr.forEach((student) => {
//     console.log(student.marks);
// })

// ---------------------------------------------------------

//Map - 
// let num = [1,2,3,4];

// let double = num.map(function(el){
//     return el * 2;
// });

//-----------------------------------------------------------

//Filter - 
// let nums = [2,4,1,5,6,2,7,8,9];

// let even = nums.filter( (num) => {
//     return num % 2 == 0;
// })

// console.log(even);

//-------------------------------------------------------------

// Every -  
// let arr = [1,2,3,4];

// let newArr = arr.every((el) => {
//     return el % 2 == 0;
// });
 
// console.log(newArr); //false

// let arr2 = [2,4];

// let newArr2 = arr2.every((el) => {
//     return el % 2 == 0;
// });

// console.log(newArr2); //true

//-----------------------------------------------------------

//Reduce - 
// let arr = [1,2,3,4];

// let finalVal = arr.reduce((res,el) => (res + el));
// console.log(finalVal);

//find max using reduce
let arr = [1,4,2,5,6,7,2,9,3];

// let max = -1;

// for(let i=0; i<arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }
// }

// console.log(max);

//         OR

// let ans = arr.reduce((max,el) => {
//     if(max < el) {
//         return el;
//     } else {
//         return max;
//     }
// });

// console.log(ans);