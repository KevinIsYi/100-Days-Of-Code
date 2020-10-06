#include <bits/stdc++.h>

using namespace std;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int n;
	string first, second;
	long long ans(0);
	
	cin >> n >> first >> second;
	
	for (int i = 0 ; i < n ; ++i) {
		ans += min(abs(first[i] - second[i]), 
		min(abs(first[i] - 48 + '9' - second[i] + 1), 
		abs(second[i] - 48 + '9' - first[i] + 1)));
		
	}
	
	cout << ans << "\n";
		
	
	return 0;
}