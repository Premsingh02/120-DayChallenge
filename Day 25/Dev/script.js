// console.dir(document.querySelector('h1'));
// console.dir(document.querySelector('#description'));
// console.dir(document.querySelector('.boxLink'));

// console.dir(document.querySelectorAll("div a"));

// let para = document.querySelector('p'); 

let links = document.querySelectorAll(".box a");

for(link of links) {
    link.style.color = "red";
}

// for(let i = 0; i<links.length; i++){
//     links[i].style.color = "green";
// }
