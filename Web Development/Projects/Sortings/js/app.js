function fillArray(arr) {
    const size = screen.height;

    for (let i = 0 ; i < 100 ; ++i) {
        arr.push(Math.floor(Math.random() * size) + 1);
    }
}

function printInScreen(arr) {
    const div = document.querySelector(".sort");
    let eachElement = document.createElement("div"), width = screen.width
    width /= arr.length;

    arr.forEach((element, index) => {
        eachElement = document.createElement("div");
        eachElement.id = "id" + index.toString(10);
        eachElement.style.width = width.toString(10) + "%";
        eachElement.style.backgroundColor = "black";
        eachElement.style.height = element.toString(10) + "px";
        div.appendChild(eachElement);
    });
}

function swap(arr, a, b) {

    console.log("Llamada");

    let aSelect = document.querySelector(`#id${a}`),
        bSelect = document.querySelector(`#id${b}`),
        aux;

    aux = aSelect.style.height;

    console.log(`Esto es aux: ${aux}`);

    console.log(aSelect);
    console.log(bSelect);

    console.log("Vamos a cambiar\n");

    console.log(`Esto es aux: ${aux}`);

    aSelect.style.height = bSelect.style.height;
    bSelect.style.height = aux;

    console.log(aSelect);
    console.log(bSelect);

    aux = arr[a];
    arr[a] = arr[b];
    arr[b] = aux;

}

function bubbleSort(arr) {

    let flag, i = arr.length - 1, j;

    do {
        flag = false;
        j = 0;

        while(j < i) {
            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1);
                flag = true;
            }
            ++j;
        }
        --i;
    } while(flag);
}

function main() {
    let arr = [];       

    fillArray(arr);
    printInScreen(arr);

    bubbleSort(arr);
    console.log(arr);
}

main();