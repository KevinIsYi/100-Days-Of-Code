import {getImagen} from "../../Base/11-async-await.js";

describe("Test with async-await and Fetch", () => {
    test("Must return url image", async() => {
        const url = await getImagen();

        expect(url.includes("https://")).toBe(true);
    });
});