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

/* ITERATORS
const createIterator = (carr) => {
    
    let i = 0;

    return {
        next: () => {
            const end = i >= carr.length;
            const value = !end ? carr[i++] : undefined;

            return {
                end, 
                value
            }
        }
    }
}

const crr = ['Item 1', 'Item 2', 'Item 3'];
const carrIterator = createIterator(crr);

console.log(carrIterator.next());
console.log(carrIterator.next());
console.log(carrIterator.next());
console.log(carrIterator.next());
*/

/* GENERATOR 
// function *createGenerator() { // Need asterisk
//     yield 1;
//     yield 'Kevin';
//     yield 3 + 3;
//     yield true;
// }

// const iterator = createGenerator();
// console.log(iterator); // It is suspenden when the generator is not being used
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next());
// console.log(iterator.next()); // Done is going to execute when there are no values

// Generator for shopping car
function *generatorCar(carr) {
    for (let i = 0 ; i < carr.length ; ++i) {
        yield carr[i]
    }
}

const crr = ['Item 1', 'Item 2', 'Item 3'];
const iterator = generatorCar(crr);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
*/

// ITERATORS

const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();

datos.set('nombre', 'Juan');
datos.set('profesion', 'Desarrollador Web');

// Default
for(let ciudad of ciudades) {
    console.log(ciudad);
}

for(let orden of ordenes) {
    console.log(orden);
}

for(let dato of datos) {
    console.log(dato);
}

// Keys Iterator
// for( let keys of ciudades.keys() ) {
//     console.log(keys);
// }

// for( let keys of ordenes.keys() ) {
//     console.log(keys);
// }

// for( let keys of datos.keys() ) {
//     console.log(keys);
// }


// // Values Iterator
// for( let value of ciudades.values()) {
//     console.log(value);
// }
// for( let value of ordenes.values()) {
//     console.log(value);
// }
// for( let value of datos.values()) {
//     console.log(value);
// }


// Entries Iterator
// for (let entry of ciudades.entries() ) {
//     console.log(entry);
// }

// for (let entry of ordenes.entries() ) {
//     console.log(entry);
// }

// for (let entry of datos.entries() ) {
//     console.log(entry);
// }