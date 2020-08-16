
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

    for (let i = 0 ; i < 1000 ; ++i) {
        arr.push(Math.floor(Math.random() * size) + 1);
    }
}


function bubbleSort(arr) {

    for (let i = 0 ; i < arr.length ; ++i) {
        setTimeout(() => {
            for (let j = 1 ; j < arr.length ; ++j) {
                if (arr[j] < arr[j - 1]) {

                    let first = document.querySelector(`#idn${j}`),
                        second = document.querySelector(`#idn${j - 1}`),
                        aux = arr[j];

                    first.style.height = `${arr[j - 1]}px`;
                    second.style.height = `${arr[j]}px`;

                    arr[j] = arr[j - 1];
                    arr[j - 1] = aux;
                }
            }
        }, 10 * i);
    }
}

function selectionSort(arr) {

    let min;

    for (let i = 0 ; i < arr.length ; ++i) {
        setTimeout(() => {
            min = i;
            for (let j = i + 1 ; j < arr.length ; ++j) {
                if (arr[j] < arr[min]) {
                    min = j;
                }
            }
            if (i != min) {
                let first = document.querySelector(`#idn${i}`),
                    second = document.querySelector(`#idn${min}`),
                    aux = arr[i];

                first.style.height = `${arr[min]}px`;
                second.style.height = `${arr[i]}px`;

                arr[i] = arr[min];
                arr[min] = aux;
            }   
        }, 10 * i);   
    }
}

function insertionSort(arr) {

    let aux, curr, first, second, j;

    for (let i = 1 ; i < arr.length ; ++i) {
        setTimeout(() => {
            aux = arr[i];

            for (j = i ; j > 0 && aux < arr[j - 1] ; --j) {
                first = document.querySelector(`#idn${j}`);
                second = document.querySelector(`#idn${j - 1}`);

                first.style.height = `${arr[j - 1]}px`;
                arr[j] = arr[j - 1];
            }

            if (i != j) {
                curr = document.querySelector(`#idn${j}`);
                curr.style.height = `${aux}px`;
                arr[j] = aux;
            }
        }, 10 * i);
        
    }
}

function main() {
    let arr = [];
    fillArray(arr);
    createBars(arr);
    bubbleSort(arr);
    //selectionSort(arr);
    //insertionSort(arr);
}

main();