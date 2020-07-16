#include <bits/stdc++.h>

using namespace std;

int perm[1001];

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);

	int t, n;
	bool found;
	
	cin >> t;
	while(t--) {
		cin >> n;
		found = false;
		
		for (int i = 0 ; i < n ; ++i) {
			cin >> perm[i];
		}
		
		for (int i = 1 ; i < n - 1; ++i) {
			if (perm[i] > perm[i - 1] && perm[i] > perm[i + 1]) {
				cout << "YES\n";
				cout << i << " " << i + 1 << " " << i + 2  << "\n";
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