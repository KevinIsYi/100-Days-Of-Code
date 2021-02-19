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


const opcionales = (name: string = 'Pedro', lastName: string, age?: number) => {
    console.log(`Name: ${name}, his last name is: ${lastName} and he is ${age} years old`);   
}

opcionales('Kevin', 'Rodríguez', 18);


const restParams = (postre: string, ...frutas:string[]): void => {
    console.log(`El postre es: ${postre} y tienes ${frutas}`);
    frutas.forEach(fruta => {
        console.log(fruta);
    })
}

restParams('Pastel', 'naranja', 'pedro', 'sí');

class Vehiculo { // Classes attributes and methods are set as public by default
    private marca: string;
    private fecha: string;
    private puertas: number;

    constructor(marca: string, fecha: string, puertas: number) {
        this.marca = marca;
        this.fecha = fecha;
        this.puertas = puertas;
    }
    acelerar(): void {
        console.log('Acelerando');
    }
    frenar(): void {
        console.log('Freno');
    }

    getMarca(): string {
        return this.marca;
    }
}

const coche = new Vehiculo('Uno', 'Dos', 5);

const data = {
    namee: 'Holi',
    pala: 15,
    ehhe: true
}

type numArray = Array<number>;
const last = <T>(arr: T[] /* Array<T>*/): T => {
    return arr[arr.length - 1];
}

console.log(last([1, 2, 3]));
console.log(last(['1', '2', '3']));

const numero = last<number>([1, 2, 3]);
const numero2 = last([1, 2, 3]);
console.log(numero, numero2);

class GenericClass<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }
}

const newGeneric = new GenericClass<string>('123');
const newGeneric2 = new GenericClass<number>(123);
const newGeneric3 = new GenericClass<Array<string>>(['123', '321']);

const makeFullName = <T extends { firstName: string; lastName: string }>(
    obj: T
) => {
    return {
        ...obj,
        fullName: obj.firstName + ' ' + obj.lastName
    }
}

console.log(makeFullName({
    firstName: 'Kevin',
    lastName: 'Rodríguez'
}));

