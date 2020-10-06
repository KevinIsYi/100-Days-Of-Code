function solve(first, second) {
    for (var i = 0 ; i < first.length ; i++) {
        if (first[i] < second[i]) {
            return -1;
        }
        else if(first[i] > second[i]) {
            return 1;
        }
    }
    return 0;
}

var first = readline();
var second = readline();

first = first.toUpperCase();
second = second.toUpperCase();

print(solve(first, second));