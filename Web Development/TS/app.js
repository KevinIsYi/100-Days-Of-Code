// Types
/*
const number = 1e30;
const string = '';
const boolean = true;
*/
var add = function (x, y) { return (x + y); };
console.log(add(10, 20)); //returns 30
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 10] = "ADMIN";
    Role[Role["READ_ONLY"] = 11] = "READ_ONLY";
    Role[Role["AUTHOR"] = 12] = "AUTHOR"; // 12
})(Role || (Role = {}));
;
var person = {
    name: 'string',
    age: 30,
    boolean: true,
    hobbies: ['Sports', '15', 'true'],
    role: Role.ADMIN,
    any: 'dsfds' // any can be whatever
};
var an = [1, 3, 6, 4,];
var arr;
console.log(person);
console.log(Role);
/* UNION */
var combine = function (first, second, resultConversion // Third parameter must be any of these strings
) {
    if (resultConversion === 'as-number') {
        return +first + +second;
    }
    else {
        return first.toString() + second.toString();
    }
};
console.log(combine('Max', 'Ana', 'as-text'));
var combineValues; // This variable can be a function with these parameters and this return type
combineValues = combine;
var opcionales = function (name, lastName, age) {
    if (name === void 0) { name = 'Pedro'; }
    console.log("Name: " + name + ", his last name is: " + lastName + " and he is " + age + " years old");
};
opcionales('Kevin', 'Rodríguez', 18);
var restParams = function (postre) {
    var frutas = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        frutas[_i - 1] = arguments[_i];
    }
    console.log("El postre es: " + postre + " y tienes " + frutas);
    frutas.forEach(function (fruta) {
        console.log(fruta);
    });
};
restParams('Pastel', 'naranja', 'pedro', 'sí');
