#include <bits/stdc++.h>
 
using namespace std;
 
int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int t;
	long long x;
	
	cin >> t;
	while(t--) {
		vector<long long> vct(3);
		for (long long & x : vct) {
			cin >> x;
		}
		
		sort(vct.rbegin(), vct.rend());
		
		if (vct[0] == vct[1]) {
			cout << "YES\n";
			cout << vct[0] << " " << vct[2] << " " << vct[2] << "\n";
		}
		else {
			cout << "NO\n";
		}
		
	}
	
	return 0;
}