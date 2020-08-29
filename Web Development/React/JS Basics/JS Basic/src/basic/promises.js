import {getHeroeById, getHeroeByOwner} from "./import-export.js";
/*
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroeById(2);
        //resolve(heroe);
        reject("No se encontró el héroe");
    }, 1000);
}); // Will be executed at the end, resolve when everything is ok, reject when it failed

promise.then((heroe) => {
    console.log(heroe);
})
.catch(err => console.log(err));
*/

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);

            if (heroe === undefined) {
                reject("No se encontró el héroe");
            }
            resolve(heroe);
        }, 1000);
    });
}

getHeroeByIdAsync(10)
    .then(console.log)
    .catch(console.warn);