const fs = require('fs');

const guardarDB = todoList => {
    const data = JSON.stringify(todoList);
    fs.writeFile('database/data.json', data, error => {
        if (error) {
            throw new Error('No se pudo grabar', error);
        }
    });
}

const cargarDB = () => {  
    try {
        return require('../database/data.json');
    } catch (error) {
        return [];
    }
}

const crear = descripcion => {
    const todoList = cargarDB();

    const todo = {
        descripcion,
        completado: false
    };

    todoList.push(todo);
    guardarDB(todoList);
}

const obtenerListado = () => {
    return cargarDB();
}

const actualizar = (descripcion, completado = true) => {
    const todoList = cargarDB();

    guardarDB(todoList.map(todo => todo.descripcion === descripcion ?  { ...todo, completado: completado === 'true' } : todo));
}

const borrar = descripcion => {
    const todoList = cargarDB();

    guardarDB(todoList.filter(todo => todo.descripcion !== descripcion));
}

module.exports = {
    crear,
    obtenerListado,
    actualizar,
    borrar
};