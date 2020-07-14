var n = Number(readline());
var ans = 0;
var str = '';

for (var i = 0 ; i < n ; i++) {
    str = readline();

    for (var j = 0 ; j < 3 ; j++) {
        if (str[j] == '+') {
            ans++;
            break;
        }
        if(str[j] == '-') {
            ans--;
            break;
        }
    }
}

print(ans);