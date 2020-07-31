(function(language) {
    console.log(`Learning ${language}`);
})('Javascript'); // IIFE (will be executed automatically)

function hi(name = "Anonymous") {
    console.log(`Hello, ${name}!`);
}

const sayHi = function(name = "Anonymous") {
    console.log(`Hello, ${name}!`);
}

const music = {
    play: function(song = "any") {
        console.log(`Playing ${song}`);
    }
}

hi("Kevin");
hi();
sayHi("Kevin");
sayHi();

music.play("Eye Of The Tiger");
const day = new Date();

console.log(day);
console.log(day.getDay());
console.log(day.getMonth());
console.log(day.getFullYear());
console.log(day.getTime());

//arrow functions
learning = (a, b) => a + b;
isEven = (n) => n % 2 == 0;

// function name = (parameters) => return value
object = () => (
    {
        learning: 'JS'
    }
)

arr = [1, 2, 3, 4, 5, 6, 7];
arr.forEach(element => {
    console.log(element);
});

console.log(learning(5, 6));
console.log(isEven(5));

