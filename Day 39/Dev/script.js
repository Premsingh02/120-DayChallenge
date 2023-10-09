let btn = document.querySelector("button");
let input = document.querySelector("input");
let form = document.querySelector("form");

form.addEventListener("submit", function(){
    event.preventDefault();
    
    let inp = document.querySelector("input");
    console.dir(inp);
    console.log(inp.value);
})

// btn.addEventListener("click", function(event){
//     console.log(event);
//     console.log("button clicked");
// });

// btn.addEventListener("dblclick", function(event){
//     console.log(event);
//     console.log("button clicked");
// });

// input.addEventListener("keydown", function(event){
//     console.log(event);
//     console.log("Key way pressed");
// }); 