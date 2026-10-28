

let Fizbuz = 0;
let Fizz = 0;
let Buzz = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FIzbuz");
        Fizbuz++;
    }
    else if (i % 3 === 0) {
        console.log("FIzz")
        Fizz++;
    }
    else if (i % 5 === 0) {
        console.log("Buzz")
        Buzz++;
    }
    else {
        console.log(i);
    }
}

console.log("Fizbuz count: " + Fizbuz);
console.log("Fizz count: " + Fizz);
console.log("Buzz count: " + Buzz);