#include <bits/stdc++.h>

using namespace std;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int t;
	long long n, d;
	bool found;
	
	cin >> t;
	while(t--) {
		cin >> n >> d;
		found = false;
		
		for (int i = 0 ; i < sqrt(d) ; i++) {
			if (i + (d + i) / (i + 1) <= n) {
				cout << "YES\n";
				found = true;
				break;
			}
		}
		if (!found) {
			cout << "NO\n";
		}
	}
	
	return 0;
}