import "@testing-library/jest-dom";
import { getSaludo } from "../../Base/02-template-string";

describe("Test on 02-template-string.js", () => {
    test("getSaludo must return Hola 'name' ", () => {
        const name = "Kevin";
        const greeting = getSaludo(name);

        expect(greeting).toBe(`Hola ${name}`);
    })
    test("getSaludo must return Hola Pedro if no parameter is sent", () => {
        const greeting = getSaludo();

        expect(greeting).toBe("Hola Pedro");
    })
})