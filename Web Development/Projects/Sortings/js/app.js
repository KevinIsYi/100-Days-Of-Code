function swap(arr, i, j) {
    const aux = arr[i];
    arr[i] = arr[j];
    arr[j] = aux;
}

function pushIntoAnimations(animations, first, second) {
    for (let i = 0 ; i < 3 ; ++i) {
        animations.push([first, second]);
    }
}

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
    let aux, color;

    for (let i = 0 ; i < animations.length ; ++i) {
        setTimeout(() => {
            const [firstIndex, secondIndex] = animations[i],
                first = bars[firstIndex],
                second = bars[secondIndex];

            if (i % 3 !== 2) {

                color = (i % 3 === 0 ? "black" : "salmon");

                first.style.backgroundColor = color;
                second.style.backgroundColor = color;
            }
            else {
                aux = first.style.height;
                first.style.height = second.style.height;
                second.style.height = aux;
            }
        }, 10 * i);
    }
}

function bubbleSort(arr) {

    const animations = [];
    let aux, i = arr.length - 1, j, flag;

    do {
        flag = false;
        j = 0;


        while(j < i) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                flag = true;

                pushIntoAnimations(animations, j, j + 1);
            }
            ++j;
        }
        ++i;
    } while(flag);

    return animations;
}

function selectionSort(arr) {

    let animations = [], min, aux;

    for (let i = 0 ; i < arr.length ; ++i) {
        min = i;
        for (let j = i + 1 ; j < arr.length ; ++j) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (i != min) { 
            swap(arr, i, min);
            pushIntoAnimations(animations, i, min);
        }
    }

    return animations;
}

function insertionSort(arr) {

    let aux, j, length = 0;
    const bars = document.getElementsByClassName("each-bar");

    for (let i = 1 ; i < arr.length ; ++i, ++length) {
        setTimeout(() => {
            aux = arr[i];

            for (j = i ; j > 0 && aux < arr[j - 1] ; --j, ++length) {
            
                for (let k = 0, z = j ; k < 2 ; ++k) { // z needs to be declared here otherwise JS will do a crazy bug and undefined j
                    setTimeout(() => {
                        const color = (k % 2 === 0 ? "black" : "salmon");
                        bars[z].style.backgroundColor = color;
                        bars[z - 1].style.backgroundColor = color;
                        
                    }, 10 * k);
                }
                bars[j].style.height = bars[j - 1].style.height;
                arr[j] = arr[j - 1];
            }
            if (i != j) {
                bars[j].style.height = `${aux}px`;
                arr[j] = aux;
            }
        }, 10 * i);
    }
    return length;

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
                swap(arr, k + i, k);
                pushIntoAnimations(animations, k + i, k);
            }
        }
    }
    return animations;
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
    return animations.length;
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
        animations.push([i, j]);
        animations.push([i, j]);    
        
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
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, auxArray[i]]);
        mainArray[k++] = auxArray[i++];
    }
    while(j <= endIndex) {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, auxArray[j]]);
        mainArray[k++] = auxArray[j++];
    }
}

function doMergeAnimation(animations) {
    
    const bars = document.getElementsByClassName("each-bar");

    for (let i = 0 ; i < animations.length ; ++i) {
        setTimeout(() => {
            const [firsIndex, secondIndex] = animations[i];

            if (i % 3 !== 2) {
                const color = (i % 3 === 0 ? "black" : "salmon");

                bars[firsIndex].style.backgroundColor = color;
                bars[secondIndex].style.backgroundColor = color;
            }
            else {
                bars[firsIndex].style.height = `${secondIndex}px`;
            }
        }, i * 10);
    }
}

function quickSort(arr) {
    const animations = [];
    quickSortHelper(animations, arr, 0, arr.length - 1);
    return animations;
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
            swap(array, i, j);
            pushIntoAnimations(animations, i, j);
        }
    }

    if (i != rightIndex) {
        swap(array, i, rightIndex);
        pushIntoAnimations(animations, i, rightIndex);
    }

    quickSortHelper(animations, array, leftIndex, i - 1);
    quickSortHelper(animations, array, i + 1, rightIndex);
    
}

function clickedButton(event, arr) {

    if (event.target.classList.contains("btn")) {
        let animations;
        switch ((event.target.id).substr(0, 2)) { // Taking first two characters
            case "bu":
                animations = bubbleSort(arr);
                break;
            case "se":
                animations = selectionSort(arr);
                break;
            case "in":
                animations = insertionSort(arr);
                break;
            case "sh":
                animations = shellSort(arr);
                break;
            case "me":
                animations = mergeSort(arr);
                break;
            case "qu":
                animations = quickSort(arr); 
                break;
        }
        
        const currId = event.target.id;

        if (currId !== "insertion" && currId !== "merge") {
            swapingAnimation(animations);
            animations = animations.length;
        }

        const slider = document.getElementById("slider"),
            button = document.getElementById(currId).style,
            shuffle = document.getElementById("shuffle"),
            buttons = document.getElementsByClassName("btn");
            
        slider.disabled = true;
        slider.classList.remove("can-change");
        slider.classList.add("cant-change");
        shuffle.style.backgroundColor = "#bdbdba";
        shuffle.disabled = true;
        changeButtonColor(button, "#7b22f7", "white");
        desactiveButtons(buttons);
        
        setTimeout(() => {
            slider.classList.remove("cant-change");
            slider.classList.add("can-change");
            changeButtonColor(button, "#f78522", "black");
            shuffle.style.backgroundColor = "#7b22f7";
            activeButtons(buttons);
            shuffle.disabled = false;
            document.getElementById("slider").disabled = false;
        }, animations * 10);
    }
}
function desactiveButtons(buttons) {

    for (let i = 0 ; i < 6 ; ++i) {
        buttons[i].disabled = true;
    }
}

function activeButtons(buttons) {
    for (let i = 0 ; i < 6 ; ++i) {
        buttons[i].disabled = false;
    }
}
function changeButtonColor(button, background, color) {
    button.backgroundColor = background;
    button.color = color;
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
    
    const value = slider.value;
    let arr = [];

    elements.innerHTML = value;
    fillArray(arr, value);
    createBars(arr);

    return arr;
}

function hoverEffect() {

    console.log("Entre perro");
    if (!shuffle.disabled) {
        shuffle.style.backgroundColor = "blue";
    }
}

function main() {
    
    let arr = [];

    const buttons = document.getElementById("buttons"),
        slider = document.getElementById("slider"),
        shuffle = document.getElementById("shuffle");
    
    window.onload = function() {
        arr = updateElementCount(slider);
    }

    console.log(shuffle);
    shuffle.addEventListener("click", function() {
        const aux = arr.length;
        arr = []
        fillArray(arr, aux);
        createBars(arr);
    });

    slider.addEventListener("input", function() {
        arr = sliderInteractions(slider);
    });
    buttons.addEventListener("click", function(event) {
        clickedButton(event, arr);
    });
}


main();