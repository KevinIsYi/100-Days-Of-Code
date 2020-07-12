#include <bits/stdc++.h>

using namespace std;

int arr[1000];

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);
	
	int n, curr, mn(10e5), moves;
	
	cin >> n;
	for (int i = 0 ; i < n ; ++i) {
		cin >> arr[i];
	}
	
	for (int i = 1 ; i <= 100 ; ++i) {
		curr = 0;
		for (int j = 0 ; j < n ; ++j) {
			curr += min(abs(i - arr[j] + 1), min(abs(i - arr[j]), abs(i - arr[j] - 1)));
		}
		
		if (curr < mn) {
			mn = curr;
			moves = i;
		}
	}
	
	cout << moves << " " << mn << "\n";
	
	return 0;
}