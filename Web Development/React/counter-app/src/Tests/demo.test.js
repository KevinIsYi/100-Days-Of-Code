describe("Test on demo.js", () => {
    test('Strings must be equal ', () => {
        //Arrangment
        const message = "Hello World!";
    
        //Act
        const message2 = "Hello World!";
    
        //Assert
        expect(message).toBe(message2);
    })
})


