//setInterval
// let id = setInterval( () => {
//     console.log("Apna College");
// }, 2000);

// console.log(id);  //to stop interval

// let id2 = setInterval( () => {
//     console.log("Hello World");
// }, 3000);

// console.log(id2);


//this with Arrow Function
const student = {
    name: "Aarav",
    marks: 95,
    prop: this,
    getName: function() {
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this);
        return this.marks;
    }
};