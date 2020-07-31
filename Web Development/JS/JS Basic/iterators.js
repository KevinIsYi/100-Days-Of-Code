const car = {
    model: "Camaro",
    motor: 6.1,
    year: 1969
}

for (let c in car) {
    console.log(`${c}: ${car[c]}`);
}

let cities = ["Londres", "New York", "Madrid", "París"];

// Entries iterator
for(let citie of cities.entries()) {
    console.log(citie);
}

// values iterator
for (let citie of cities) {
    console.log(citie);
}

let str = "Learning JS";
for (let letter of str) {
    console.log(letter);
}

