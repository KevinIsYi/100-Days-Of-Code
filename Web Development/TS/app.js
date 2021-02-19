// Types
/*
const number = 1e30;
const string = '';
const boolean = true;
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, fecha, puertas) {
        this.marca = marca;
        this.fecha = fecha;
        this.puertas = puertas;
    }
    Vehiculo.prototype.acelerar = function () {
        console.log('Acelerando');
    };
    Vehiculo.prototype.frenar = function () {
        console.log('Freno');
    };
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    return Vehiculo;
}());
var coche = new Vehiculo('Uno', 'Dos', 5);
var data = {
    namee: 'Holi',
    pala: 15,
    ehhe: true
};
var last = function (arr /* Array<T>*/) {
    return arr[arr.length - 1];
};
console.log(last([1, 2, 3]));
console.log(last(['1', '2', '3']));
var numero = last([1, 2, 3]);
var numero2 = last([1, 2, 3]);
console.log(numero, numero2);
var GenericClass = /** @class */ (function () {
    function GenericClass(value) {
        this.value = value;
    }
    return GenericClass;
}());
var newGeneric = new GenericClass('123');
var newGeneric2 = new GenericClass(123);
var newGeneric3 = new GenericClass(['123', '321']);
var makeFullName = function (obj) {
    return __assign(__assign({}, obj), { fullName: obj.firstName + ' ' + obj.lastName });
};
console.log(makeFullName({
    firstName: 'Kevin',
    lastName: 'Rodríguez'
}));
