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

