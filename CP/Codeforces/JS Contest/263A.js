var ans, val;

for (var i = 0 ; i < 5 ; i++) {
    val = readline().split(' ');

    for (var j = 0 ; j < 5 ; j++) {
        if (val[j] == '1') {
            ans = Math.abs(2 - i) + Math.abs(2 - j);
        }
    }
}

print(ans);