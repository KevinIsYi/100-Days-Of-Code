#include <bits/stdc++.h>

using namespace std;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
		
	int n, first, second;
	string str;
	bool found(false);
	
	cin >> n;
	for (int i = 0 ; i < n ; ++i) {
		cin >> str >> first >> second;
		
		if (first >= 2400 && second > first) {
			found = true;
		}
	}
	
	if (found) {
		cout << "YES\n";
	}
	else {
		cout << "NO\n";
	}
	
	return 0;
}