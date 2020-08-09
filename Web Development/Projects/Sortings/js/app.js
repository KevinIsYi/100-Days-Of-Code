function fillArray(arr) {
    const size = screen.height;

    for (let i = 0 ; i < 100000 ; ++i) {
        arr.push(Math.floor(Math.random() * size) + 1);
    }
}

function printInScreen(arr) {
    const div = document.querySelector(".sort");
    let eachElement = document.createElement("div"), width = screen.width;
    width /= arr.length;

    arr.forEach((element, index) => {
        eachElement = document.createElement("div");
        eachElement.id = index.toString(10);
        eachElement.style.width = width.toString(10) + "%";
        eachElement.style.backgroundColor = "black";
        eachElement.style.height = element.toString(10) + "px";
        div.appendChild(eachElement);div.appendChild(eachElement);
    });
}

function main() {
    let arr = [];

    fillArray(arr);
    printInScreen(arr);
}

main();