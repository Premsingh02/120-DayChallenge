//this
const student = {
    name: "Aarav",
    age: 22,
    eng: 95,
    math: 90,
    phy: 97,
    getAvg() {
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}


//Try and catch
try {
    console.log(a); // a is not defined error
} catch {
    console.log("Variable is not defined");
}

console.log("HEllo")
console.log("HEllo")
console.log("HEllo")
console.log("HEllo")