import {getUser, getUsuarioActivo} from "../../Base/05-funciones.js";
import "@testing-library/jest-dom";

describe("Functions test", () => {
    test("Must return an object", () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();

        expect(user).toEqual(userTest);
    })
    test("Must return username with paramenter", () => {
        const userTest = {
            uid: 'ABC567',
            username: "Kevin"
        }

        const user = getUsuarioActivo("Kevin");

        expect(user).toEqual(userTest);
    })
})