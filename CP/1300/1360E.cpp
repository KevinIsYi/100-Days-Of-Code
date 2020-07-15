#include <bits/stdc++.h>

using namespace std;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int t, n;
    bool res;
 
    cin >> t;
    while (t--) {
        res = true;
        cin >> n;
 
        string matrix[n];
 
        for (int i = 0 ; i < n ; i++) {
            cin >> matrix[i];
        }
 
        for (int i = 0 ; i < n - 1 ; i++) {
            for (int j = 0 ; j < n - 1 ; j++) {
                if (matrix[i][j] == '1') {
                    if (matrix[i + 1][j] == '0' && matrix[i][j + 1] == '0') {
                        res = false;
                    }
                }
            }
        }
 
        if (res) {
            cout << "YES\n";
        }
        else {
            cout << "NO\n";
        }
    }
    return 0;
}