#include <bits/stdc++.h>

using namespace std;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int t;
	long long a, b;
	
	cin >> t;
	while(t--) {
		cin >> a >> b;

		cout << min(a, min(b, (a + b) / 3)) << "\n";
	}
	
	return 0;
}