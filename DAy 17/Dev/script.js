 //HOF
// function multipleGreet(func,n) {
//     for(let i=1; i<=n; i++){
//         func();
//     }
// }


// let greet = function() {
//     console.log("Hello");
// }

// multipleGreet(greet,10);


//HOF RETURNS A FUNCTION
function oddEvenTest(request){
    if(request == "odd") {
        return function(n) {
            console.log(!(n%2 == 0));
        }
    } else if (request == "even"){
        return function(n) {
            console.log(n%2 == 0);
        }
    } else {
        console.log("wrong request");
    }
}

let request = "odd";


// Methods
const calculator = {
    num: 55,
    add: function(a,b) {
        return a + b;
    },
    sub: function(a,b){
        return a - b;
    },
    mul: function(a,b){
        return a * b;
    },
}