#include <bits/stdc++.h>

using namespace std;

int arr[300005];

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int n, ans;
	cin >> n;
	for (int i = 1 ; i <= n ; ++i) {
		cin >> arr[i];
	}
	
	ans = 0;
	for (int i = 2 ; i <= n ; ++i) {
		if (arr[i] != arr[1]) {
			ans = max(ans, i - 1);
		}
	}
	for (int i = 1 ; i < n ; ++i) {
		if (arr[i] != arr[n]) {
			ans = max(ans, n - i);
		}
	}
	
	cout << ans << "\n";
	
	return 0;
}