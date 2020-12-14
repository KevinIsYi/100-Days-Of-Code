const empleados = [
    {
        id: 1,
        nombre: 'Kevin'
    },
    {
        id: 2,
        nombre: 'Melissa'
    },
    {
        id: 3,
        nombre: 'Juan'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

const getEmpleado = id => {
    return new Promise((resolve, reject) => {
        const empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${ id }`);
        } else {
            resolve(empleadoDB);
        }
    });
}

const getSalario = empleado => {

    return new Promise((resolve, reject) => {
        const salarioDB = salarios.find(salario => salario.id === empleado.id);
    
        if (!salarioDB) {
            reject(`No se encontró un salario para el ID ${ empleado.id }`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    })
}

getEmpleado(2)
    .then( empleado => {
        return getSalario(empleado);
    })
    .then( conSalario => {
        console.log('El empleado es: ', conSalario);
    })
    .catch( error => {
        console.log(error);
    } )
