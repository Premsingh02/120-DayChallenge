let btn = document.querySelector("button");
console.dir(btn);

// btn.onclick = function () { 
//     alert("button was clicked");
// }

//         or

// function sayHello() {
//     alert("Hello!");
// }

// btn.onclick = sayHello;

// function sayHi() {
//     alert("HI!");
// }

// btn.onmouseenter = sayHi;

// addEventListener 
// element.addEventListener(event,callback);


// EventListener -
let btns = document.querySelectorAll("button");

for(btn of btns) {
    btn.addEventListener("click",sayHello);
    btn.addEventListener("click",sayName);
};

function sayHello() {
    alert("Hello!");
}

function sayName() {
    alert("Aarav Kumar");
}