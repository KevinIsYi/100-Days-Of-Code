#include <bits/stdc++.h>

using namespace std;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);

	int t, prev, mn;
	string str;
	
	cin >> t;
	while(t--) {
		cin >> str;
		prev = 0;
		mn = 0;
		
		for (int i = 0, j = 0 ; i < (int)str.size() ; ++i) {
			if (str[i] == 'R') {
				mn = max(mn, i + 1 - prev);
				prev = i + 1;
			}
		}
		
		mn = max(mn, (int)str.size() + 1 - prev);
		cout << mn << "\n";
	}
	
	return 0;
}