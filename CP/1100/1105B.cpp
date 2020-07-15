#include <bits/stdc++.h>

using namespace std;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int n, k, length, curr, mx(0);
	string str;
	
	cin >> n >> k >> str;
	
	for (char i = 'a' ; i <= 'z' ; ++i) {
		curr = 0;
		length = 0;
		for (int j = 0 ; j < n ; j++) {
			if (str[j] == i) {
				curr++;
				if (curr >= k) {
					length++;
					curr = 0;
				}
			}
			else {
				curr = 0;
			}
		}
		mx = max(mx, length);
	}
	
	cout << mx << "\n";
	return 0;
}