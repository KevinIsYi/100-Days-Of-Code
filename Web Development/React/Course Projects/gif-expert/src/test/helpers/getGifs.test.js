import { getGif } from "../../helpers/getGifs";

describe ("Tests on getGifs fetch", () => {
    test('must have 15 elements', async () => {
        const gifs = await getGif("One Punch");
        expect(gifs.length).toBe(15);
    });
    test ("Must have 15 elements", async() => {
        const gifs = await getGif("");
        expect(gifs.length).toBe(0);
    });
});