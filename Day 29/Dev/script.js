let btn = document.querySelector("button");
console.dir(btn);

// btn.onclick = function () { 
//     alert("button was clicked");
// }

//         or

function sayHello() {
    alert("Hello!");
}

btn.onclick = sayHello;

function sayHi() {
    alert("HI!");
}

btn.onmouseenter = sayHi;