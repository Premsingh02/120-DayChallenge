// Q1
let num = 5;

let array = [1,12,3,4,35,6,7,8,9];

function largetNum(array,num) {
    for(let i=0; i<=array.length; i++){
        if(array[i] > num){
            console.log(array[i]);
        }
    }
}

largetNum(array,num);

//Q2
let str = "sjdafsfjafjsaghsa";

function uniqueElements() {
    let ans = "";
    for(let i=0; i<str.length; i++){
       let currChar = str[i];
        if(ans.indexOf(currChar) == -1){
            ans += currChar;
        }
    }
    return ans;
}

console.log(uniqueElements(str));