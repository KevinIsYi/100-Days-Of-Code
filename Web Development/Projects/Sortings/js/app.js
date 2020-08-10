function createBars(arr) {
    const main = document.querySelector("body"), width = screen.width, len = arr.length;
    let each;

    arr.forEach((number, index) => {
        each = document.createElement("div");
        each.innerHTML = `<div id="idn${index}" class="bar" style="height: ${number}px; width: ${width / len}px";></div>`;
        main.appendChild(each);
    });
}

function fillArray(arr) {
    const size = screen.height - 200;

    for (let i = 0 ; i < 10 ; ++i) {
        arr.push(Math.floor(Math.random() * size) + 1);
    }
}

function main() {
    let arr = [];
    fillArray(arr);
    createBars(arr);

    let uno = document.getElementById("idn0"),
        dos = document.getElementById("idn1");

    console.log(uno);
    console.log(dos);
}

main();
/*
let value, count = 0;

let varName = function() {
    if (count <= 10) {
        console.log(`Vuelta: ${count}`);
        ++count
    }
    else {
        clearInterval(value);
    }
}

value = setInterval(varName, 500);
*/
