let input = document.createElement("input");
let btn = document.createElement("button");

btn.innerText = "Click me";

document.querySelector("body").prepend(input);
document.querySelector("body").append(btn);

btn.setAttribute("id","btn");
input.setAttribute("placeholder","username");

let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
document.querySelector("body").append(h1);

let p = document.createElement("p");
p.innerHTML = "Apna College <b> Delta </b> Practice";
document.querySelector("body").append(p);
