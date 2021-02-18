// Types
/*
const number = 1e30;
const string = '';
const boolean = true;
*/

type Combinable = number | string; // Custom type
type ConversionDescriptor = 'as-number' | 'as-text';

const add = (x: number, y: number): number => (x + y);

console.log(add(10, 20)); //returns 30

enum Role {
    ADMIN = 10,
    READ_ONLY, // 11
    AUTHOR // 12
};

const person: {
    name: string,
    age: number,
    boolean: boolean,
    hobbies: string[],
    //role: [number, string] // This is a tuple
    role: number,
    any: any
} = {
    name: 'string',
    age: 30,
    boolean: true,
    hobbies: ['Sports', '15', 'true'],
    role: Role.ADMIN,
    any: 'dsfds' // any can be whatever
}

const an: any[] = [1, 3, 6, 4,];
let arr: object[];
console.log(person);
console.log(Role);

/* UNION */
const combine = (
    first: Combinable,
    second: Combinable,
    resultConversion: ConversionDescriptor // Third parameter must be any of these strings
): Combinable => {
    if (resultConversion === 'as-number') {
        return +first + +second;
    }
    else {
        return first.toString() + second.toString();
    }
}

console.log(combine('Max', 'Ana', 'as-text'));

let combineValues: (a: number, b: number, c: ConversionDescriptor) => Combinable; // This variable can be a function with these parameters and this return type
combineValues = combine;