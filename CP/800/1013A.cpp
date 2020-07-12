#include <bits/stdc++.h>

using namespace std;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int n, x, first(0), second(0);
	
	cin >> n;
	for (int i = 0 ; i < n ; ++i) {
		cin >> x;
		first += x;
	}
	for (int i = 0 ; i < n ; ++i) {
		cin >> x;
		second += x;
	}
	
	if (second > first) {
		cout << "NO\n";
	}
	else {
		cout << "YES\n";
	}

	
	
	return 0;
}