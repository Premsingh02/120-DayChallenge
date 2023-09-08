// Guess the favorite Movie
let favMovie = "avatar";

let guess = prompt("Guess My Favorite Movie Name");

while((guess != favMovie) && (guess != "quit")){
    console.log("Wrong Guess");
    guess = prompt("Try Again");
}

if(guess == favMovie){
    console.log("Congrats!!");
}


