import { retornaArreglo } from "../../Base/07-deses-arr";
import "@testing-library/jest-dom";

describe("Destructuring test", () => {
    test('Must return an array', () => {
        const [letter, numb] = retornaArreglo();

        expect(typeof letter).toEqual("string");
    })
    
})