
const person = {
    name: "Kevin",
    last: "Rodríguez",
    mail: "email@email.com",
    age: 15,
    arr: [15, 12, 36, 15, 11],
    address: {
        city: "Zapopan",
        country: "Mexico"
    },
    date: function() {
        return new Date().getFullYear() - this.age
    }
};

console.log(person);
console.log(person.name);
console.log(person.arr[0]);
console.log(person.address.city);
console.log(person["address"]["city"]);
console.log(person.date());


const car = [
    {
        model: "Mustang",
        motor: 6.0
    },
    {
        model: "Camaro",
        motor: 6.1
    }
];

console.log(car[0].model);
console.log(car.length);