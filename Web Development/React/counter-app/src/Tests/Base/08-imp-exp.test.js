import { getHeroeById, getHeroesByOwner } from "../../Base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Test on Heroes", () => {
    test("Must return heroe by id (undefined if heroe id doesnt exist)", () => {
        const id = 15;
        const heroe = getHeroeById(id);
        
        const heroeData = heroes.find(heroe => heroe.id === id);

        expect(heroe).toEqual(heroeData);
    });
    test("Must return dc heroes", () => {
        const dcHeroesTest = heroes.filter(heroe => heroe.owner === "DC");
        const heroeData = getHeroesByOwner("DC");

        expect(heroeData).toEqual(dcHeroesTest);
    });
    test("Must return how many marvel heroes exist", () => {
        const marvelSize = heroes.filter(heroe => heroe.owner === "Marvel").length;
        const heroeData = getHeroesByOwner("Marvel").length;

        expect(heroeData).toBe(marvelSize);
    });
})