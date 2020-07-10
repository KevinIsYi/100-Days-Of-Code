#include <bits/stdc++.h>

using namespace std;

int main() {
	
	int t, n;
	long long a;
	
	cin >> t;
	while(t--) {
		cin >> n;
		
		for (int i = 0 ; i < n ; ++i) {
			cin >> a;
			if ((i % 2 == 0 && a <= 0) || (i % 2 == 1 && a >= 0)) {
				cout << a * -1 << " ";
			}
			else {
				cout << a << " ";
			}
		}
		cout << "\n";
	}
	
	return 0;
}