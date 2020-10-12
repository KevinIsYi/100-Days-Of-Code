/* SETS
const carr = new Set();

carr.add('Shirt');
carr.add('Pants');
carr.add('Shoes');
carr.add('Seatbell');
carr.add('Ala');

//carr.clear();

carr.forEach(product => {
    console.log(product);
})

console.log(carr.delete('Shoes'));

console.log(carr.size);
console.log(carr.has('Shirt'));


console.log(carr);
*/

/* WEAKSET
// Solo se le pueden agregar objetos, no existe size, no es iterable
const carr = new WeakSet();

const customer = {
    name: 'Kevin',
    balance: 100
}

carr.add(customer);

console.log(carr.has(customer));
console.log(carr.delete(customer));

console.log(carr);
*/

/* MAPS
const mp = new Map();

mp.set('name', 'Kevin');
mp.set('type', 'premium');
mp.set('balance', 1000);
mp.set('name', 'yolo');


console.log(mp);
console.log(mp.size);
console.log(mp.has('name'));
console.log(mp.get('name'));
console.log(mp.delete('name'));


mp.forEach((value, key) => {
    console.log(key, value);
})
*/

/* WEAKMAP, llave son objetos, no son iterables, no hay size
const product = {
    id: 10
}

const wmp = new WeakMap();

wmp.set(product, 'Monitor');

console.log(wmp.has(product));
console.log(wmp.get(product));
console.log(wmp.delete(product));
console.log(wmp);
*/

/* SYMBOLS
const name = Symbol();
const lastName = Symbol();
const person = {};

person[name] = 'Kevin';
person[lastName] = 'Rodríguez';
person.type = 'Premium';

console.log(person);
console.log(person[name]);

// Properties that use a symbol are not iterable

//symbol with description
const custName = Symbol('Name of the customer');
const customer = {};

customer[custName] = 'Kevin';

console.log(customer);
*/