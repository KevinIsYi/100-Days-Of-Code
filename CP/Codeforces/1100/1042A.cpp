#include <bits/stdc++.h>

using namespace std;

int arr[101];

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int n, m, mx(0), mn, pos;
	
	cin >> n >> m;
	for (int i = 0 ; i < n ; ++i) {
		cin >> arr[i];
		mx = max(mx, arr[i] + m);
	}
	
	for (int i = 0 ; i < m ; ++i) {
		pos = -1;
		for (int j = 0 ; j < n ; ++j) {
			if (pos == -1 || arr[j] < arr[pos]) {
				pos = j;
			}
		}
		arr[pos]++;
	}
	
	mn = 0;
	for (int i = 0 ; i < n ; ++i) {
		mn = max(mn, arr[i]);
	}
	
	cout << mn << " " << mx << "\n";
	
	
	
	return 0;
}