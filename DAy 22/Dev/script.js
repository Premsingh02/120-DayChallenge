//Spread - 
let arr = [1,2,3,4,5];
let newArr = [...arr];
console.log(newArr);

let chars = [..."hello"];
console.log(chars);

let odd = [1,3,5,7,9];
let even = [2,4,6,8,10];

let nums = [...odd, ...even];
console.log(nums);

//Spread with Object Literals -
let data = {
    email: "ironman@gmail.com",
    password: "abcd",
}

let dataCopy = {...data, id: 123};
console.log(dataCopy);

let arr2 = [1,2,3,4,5];
let obj = {...arr2};
console.log(obj);

//------------------------------------------

//Rest 
function sum(...args) {
    for(let i=0; i<args.length; i++){
        console.log("You gave us: ", args[i]);
    }
}

function min(a,b,c,d){
    console.log(arguments);
}

//-------------------------------------------

//Destructing
let names = ["tony", "bruce", "peter", "steve"];

let [winner, runnerUp, secondRunnerUP] = names;

console.log(winner);
console.log(runnerUp);
console.log(secondRunnerUP);

//In Objects
const student = {
    name: "Karan",
    age: 14,
    class: 9,
    subjects: ["hindi", "english", "math", "science"],
    username: "karan@123",
    password: "abcd",
};

const {username:user, password:pass} = student;

console.log(user);
console.log(pass);