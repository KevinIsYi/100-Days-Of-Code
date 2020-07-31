let numbers = [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbers2 = [11, 1111, 12, 13, -58, 15, 16];

// Inserts at first position
numbers.unshift(0);
// Deletes first element
numbers.shift();
// From pos i, removes x elements (i, x)
numbers.splice(2, 1);

numbers = numbers.concat(numbers2);

console.log(numbers.sort());

numbers.sort(function(x, y) {
    return x - y;
});

console.log(numbers);