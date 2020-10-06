#include <bits/stdc++.h>

using namespace std;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int t;
	string str;
	
	cin >> t;
	while(t--) {
		cin >> str;
		string ans;
		
		ans += str[0];
		ans += str[1];
		
		for (int i = 3 ; i < (int)str.size(); i += 2) {
			ans += str[i];
		}
		
		cout << ans << "\n";
	}
	
	return 0;
}