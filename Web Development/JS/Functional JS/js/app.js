/*
const suma = (a, b) => a + b;
const mult = (a, b) => a * b;

const doOperation = fn => fn(10, 20);

console.log(doOperation(suma));
console.log(doOperation(mult));
*/


/*
const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];


/*
const resultado = carrito.filter(producto => producto.precio > 400);

const mayor400 = producto => producto.precio > 400;
console.log(carrito.filter(mayor400));
*/

/*
const obtenerNombres = ({ nombre }) => nombre;
const resultado = carrito.map(obtenerNombres);
console.log(resultado);
*/

/* Closure
const obtenerCliente = () => {
    const nombre = 'Kevin';

    const muestraNombre = () => {
        console.log(nombre);
    }

    return muestraNombre;
}

const cliente = obtenerCliente();
cliente();
*/

/* Currying
const suma = (a, b, c) => a + b + c;

console.log(suma(1, 2, 3));

const parcial = a => (b, c) => suma(a, b, c);
const primero = parcial(5);
const res = primero(10, 15);
console.log(res);

const segundo = parcial(1)(2, 3);
console.log(segundo);
*/

// Composition
const obtenerNombre = info => ({
    mostrarNombre() {
        console.log(`Nombre: ${ info.nombre }`);
    }
});

const guardarEmail = info => ({
    agregarEmail(email) {
        console.log(`Guardando email: ${ email }`);
        info.email = email;
    }
})

const obtenerEmail = info => ({
    mostraEmail() {
        console.log(`Correo: ${ info.email }`);
    }
})

function Cliente(nombre, email, empresa) {
    let info = {
        nombre,
        email,
        empresa
    };
    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info)
    ); // Copia info hacia dentro del objeto
}

function Empleado(nombre, email, puesto) {
    let info = {
        nombre,
        email,
        puesto
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info)
    );
}

const cliente = Cliente('Kevin', null, 'XD');
const empleado = Empleado('Pedro', null, 'Programator');


cliente.mostrarNombre();
empleado.mostrarNombre();

cliente.agregarEmail('pedro@polola.com');
cliente.mostraEmail();

console.log(cliente);
console.log(empleado);
