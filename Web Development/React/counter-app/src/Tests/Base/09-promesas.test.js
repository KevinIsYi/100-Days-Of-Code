import { getHeroeByIdAsync } from "../../Base/09-promesas";
import heroes from "../../data/heroes";

describe("Test with promises", () => {
    test("Must return a heroe async", (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            });
    });
    test("Must return error if id doesnt exist", (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe("No se pudo encontrar el héroe");
                done();
            });
    });
});