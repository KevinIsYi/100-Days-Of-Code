import {heroes, owners} from "../data/heroes.js";

/*
const getHeroeById = (id) => {
    return heroes.find((heroe) => {
        heroe.id === id;
    });
};
*/
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
export const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

/*
console.log(owners);
console.log(getHeroeById(5));
console.log(getHeroeByOwner("DC"));
*/