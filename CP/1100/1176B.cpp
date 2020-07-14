#include <bits/stdc++.h>

using namespace std;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int t, n;
	long long count, each;
	long long extra[2];
	
	cin >> t;
	while(t--) {
		cin >> n;
		
		extra[0] = 0;
		extra[1] = 0;
		count = 0;
		
		for (int i = 0 ; i < n ; ++i) {
			cin >> each;
			if (each % 3 != 0) {
				extra[(3 - (each % 3)) - 1]++;
			}
			else {
				count++;
			}
		}
		
		each = min(extra[0], extra[1]);
		count += each;
		each = abs(extra[0] - extra[1]);
		count += each / 3;
		
		
		cout << count << "\n";
	}
	
	return 0;
}