
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
    console.log(`Original: ${arr}`);
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

function shellSort(arr) {

    let factor = 0.85;

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
}

function mergeSort(left, right)  {
	var i = 0;
	var j = 0;
	var results = [];

	while (i < left.length || j < right.length) {
		if (i === left.length) {
			// j is the only index left_part
			results.push(right[j]);
			j++;
		} 
        else if (j === right.length || left[i] <= right[j]) {
			results.push(left[i]);
			i++;
        } 
        else {
			results.push(right[j]);
			j++;
		}
	}
	return results;
}

function sortMerge(array) {
    if (array.length == 1) {
        return array;
    }

    let middle = Math.floor(array.length / 2),
        right = sortMerge(array.slice(0, middle));
        left = sortMerge(array.slice(middle)),
        aux = [],
        i = 0,
        j = 0;

    while (i < right.length && j < left.length) {
        if (right[i] < left[j]) {
            aux.push(right[i]);
            ++i;
        }
        else {
            aux.push(left[j]);
            ++j;
        }
    }

    while (i < right.length) {
        aux.push(right[i]);
        ++i;
    }
    while (j < left.length) {
        aux.push(left[j]);
        ++j;
    }

    return aux;
}


function main() {
    
    let arr = [5, 3, 1, 9, 7, 2, 8, 1, 11, 4];

    console.log(`Original: ${arr}`);
    //fillArray(arr);
    //createBars(arr);
    //bubbleSort(arr);
    //selectionSort(arr);
    //insertionSort(arr);
    //shellSort(arr);
    console.log(sortMerge(arr));
    console.log(arr);
}

main();