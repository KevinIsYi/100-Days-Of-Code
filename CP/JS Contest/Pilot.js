var input = readline();
var set = new Set();

for (var i = 0 ; i < input.length ; i++) {
    set.add(input[i]);
}

var siz = set.size;

if (siz % 2 == 1) {
    print("IGNORE HIM!");
}
else {
    print("CHAT WITH HER!");
}
