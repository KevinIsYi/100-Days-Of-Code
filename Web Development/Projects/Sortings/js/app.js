function createBars(arr) {
    const bars = document.querySelector(".bars"),
        width = screen.width * 0.8 - 250,
        len = arr.length;
    let each;

    while(bars.firstChild) {
        bars.removeChild(bars.firstChild);
    }

    arr.forEach(number => {
        each = document.createElement("div");
        each.classList.add("each-bar");
        each.style.height = `${number}px`;
        each.style.width = `${width / len}px`;

        bars.appendChild(each);
    });
}

function fillArray(arr, nElements) {

    let size = screen.height - 200;

    if (typeof InstallTrigger !== 'undefined') { // Firefox
        size -= 150;
    }

    for (let i = 0 ; i < nElements ; ++i) {
        arr.push(Math.floor(Math.random() * size) + 1);
    }
}

function swapingAnimation(animations) {

    const bars = document.getElementsByClassName("each-bar");
    
    for (let i = 0 ; i < animations.length ; ++i) {
        setTimeout(() => {
            const [firstIndex, secondIndex] = animations[i],
                first = bars[firstIndex].style.height,
                second = bars[secondIndex].style.height;

            bars[firstIndex].style.height = `${second}`;
            bars[secondIndex].style.height = `${first}`;

        }, i * 5);
    }
}

function bubbleSort(arr) {

    const animations = [];
    let i = arr.length - 1, j, flag;

    do {
        flag = false;
        j = 0;

        while (j < i) {
            if (arr[j] > arr[j + 1]) {
                const aux = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = aux;

                animations.push([j, j + 1]);
                flag = true;
            }
            ++j;
        }
        ++i;
    } while(flag);


    swapingAnimation(animations);
}

function selectionSort(arr) {

    let animations = [], min;

    for (let i = 0 ; i < arr.length ; ++i) {
        min = i;
        for (let j = i + 1 ; j < arr.length ; ++j) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (i != min) { 
            animations.push([i, min]);

            const aux = arr[i];
            arr[i] = arr[min];
            arr[min] = aux;
        }
    }

    swapingAnimation(animations);
}

function insertionSort(arr) {

    let aux, j;
    const bars = document.getElementsByClassName("each-bar");

    for (let i = 1 ; i < arr.length ; ++i) {
        setTimeout(() => {
            aux = arr[i];

            for (j = i ; j > 0 && aux < arr[j - 1] ; --j) {
                bars[j].style.height = bars[j - 1].style.height;

                arr[j] = arr[j - 1];
            }
            if (i != j) {
                bars[j].style.height = `${aux}px`;
                arr[j] = aux;
            }
        }, 10 * i);
    }

    /*
    let animations = [];
    for (let i = 1 ; i < arr.length ; ++i) {
        let aux = arr[i], j;
        for (j = i ; j > 0 && aux < arr[j - 1] ; --j) {
            arr[j] = arr[j - 1];
            animations.push([j, j - 1]);
        }
        if (i != j) {
            arr[j] = aux;
            animations.push([true, i, j]);
        }
    }
    doInsertionAnimation(animations);
    
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
    */
    
}
/*
function doInsertionAnimation(animations) {
    const bars = document.getElementsByClassName("bar");

    for (let i = 0 ; i < animations.length ; ++i) {
        const aux = animations[i];
        if (aux.length < 3) {
            bars[aux[0]].style.height = bars[aux[1]].style.height;
        }
        else {
            bars[aux[2]].style.height = bars[aux[1]].style.height;
        }
    }
}
*/

function shellSort(arr) {

    const animations = [],
        factor = 0.85;

    for (let i = Math.round(arr.length * factor) ; i > 0 ; i = Math.floor(i * factor)) {
        for (let k = 0 ; k < arr.length - i ; ++k) {
            if (arr[k] > arr[k + i]) {
                const aux = arr[k];
                animations.push([k + i, k]);

                arr[k] = arr[k + i];
                arr[k + i] = aux;
            }
        }
    }
    swapingAnimation(animations);
    /*
    for (let i = Math.round(arr.length * factor), j = 0 ; i > 0 ; i = Math.floor(i * factor), ++j) {
        setTimeout(() => {
            for (let k = 0 ; k < arr.length - i ; ++k) {
                if (arr[k] > arr[k + i]) {
                    let first = document.querySelector(`#idn${k}`),
                        second = document.querySelector(`#idn${k + i}`),
                        aux = arr[k];

                    first.style.height = `${arr[k + i]}px`;
                    second.style.height = `${arr[k]}px`;
                    arr[k] = arr[k + i];
                    arr[k + i] = aux;
                }
            }
        }, 10 * j);      
    }
    */
}


// Merge algorithm taken from YT channel 'Clément Mihailescu'
// Video: Sorting Visualizer Tutorial (software engineering project)
// Link: https://www.youtube.com/watch?v=pFXYym4Wbkc

function mergeSort(arr) {
    const animations = [];
    if (arr.length <= 1) {
        return arr;
    }
    const auxArr = arr.slice();
    mergeSortHelper(arr, 0, arr.length - 1, auxArr, animations);
    doMergeAnimation(animations);
}

function mergeSortHelper(mainArray, startIndex, endIndex, auxArray, animations) {
    if (startIndex === endIndex) {
        return;
    }
    const middleIndex = Math.floor((startIndex + endIndex) / 2);
    mergeSortHelper(auxArray, startIndex, middleIndex, mainArray, animations);
    mergeSortHelper(auxArray, middleIndex + 1, endIndex, mainArray, animations);
    doMerge(mainArray, startIndex, middleIndex, endIndex, auxArray, animations);
}

function doMerge(mainArray, startIndex, middleIndex, endIndex, auxArray, animations) {
    let k = startIndex,
        i = startIndex,
        j = middleIndex + 1;

    while(i <= middleIndex && j <= endIndex) {
        if (auxArray[i] <= auxArray[j]) {
            animations.push([k, auxArray[i]]);
            mainArray[k++] = auxArray[i++];
        }
        else {
            animations.push([k, auxArray[j]]);
            mainArray[k++] = auxArray[j++];
        }
    }

    while(i <= middleIndex) {
        animations.push([k, auxArray[i]]);
        mainArray[k++] = auxArray[i++];
    }
    while(j <= endIndex) {
        animations.push([k, auxArray[j]]);
        mainArray[k++] = auxArray[j++];
    }
}

function doMergeAnimation(animations) {
    
    const bars = document.getElementsByClassName("each-bar");

    for (let i = 0 ; i < animations.length ; ++i) {
        setTimeout(() => {
            const [barOne, newHeight] = animations[i];
                bars[barOne].style.height = `${newHeight}px`;
        }, i * 1);
    }
}

function quickSort(arr) {
    const animations = [];
    quickSortHelper(animations, arr, 0, arr.length - 1);
    swapingAnimation(animations);
}

function quickSortHelper(animations, array, leftIndex, rightIndex) {
    if (leftIndex >= rightIndex){
        return;
    }

    let i = leftIndex, j = rightIndex;

    while(i < j){
        while (i < j && array[i] <= array[rightIndex]){
            i++;
        }

        while (i < j && array[j] >= array[rightIndex])  {
            j--;
        }

        if (i != j) {
            animations.push([i, j]);
            const aux = array[i];
            array[i] = array[j];
            array[j] = aux;
        }
    }

    if (i != rightIndex) {
        animations.push([i, rightIndex]);
        const aux = array[i];
        array[i] = array[rightIndex];
        array[rightIndex] = aux;
    }

    quickSortHelper(animations, array, leftIndex, i - 1);
    quickSortHelper(animations, array, i + 1, rightIndex);
    
}

function clickedButton(event, arr) {

    if (event.target.classList.contains("btn")) {
        switch ((event.target.id)[0]) {
            case "b":
                bubbleSort(arr);
                break;
            case "s":
                selectionSort(arr);
                break;
            case "i":
                insertionSort(arr);
                break;
            case "s":
                shellSort(arr);
                break;
            case "m":
                mergeSort(arr);
                break;
            case "q":
                quickSort(arr); 
                break;
        }
        /*
        colorButton(event.target.id);
        setTimeout(() => {
            console.log("Habilitado");
            document.getElementById("slider").disabled = false;
        }, 5000);
        */
    }
}

function colorButton(button) {
    button = document.getElementById(button);
    button.classList.add("button-onclick");
}

function sliderInteractions(slider) {

    let arr = [];
    fillArray(arr, slider.value);
    updateElementCount(slider);
    createBars(arr);

    return arr;
}

function updateElementCount(slider) {
    elements = document.getElementById("nElements");
    elements.innerHTML = slider.value;
}

function main() {
    
    let arr = [];

    const buttons = document.getElementById("buttons"),
        slider = document.getElementById("slider");

    document.querySelector("body").addEventListener("DOMContentLoaded", updateElementCount(slider));
    
    slider.addEventListener("input", function() {
        arr = sliderInteractions(slider);
    });
    buttons.addEventListener("click", function(event) {
        clickedButton(event, arr);
    });
}


main();