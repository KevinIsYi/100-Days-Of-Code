#include <bits/stdc++.h>

using namespace std;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);
	
	int b, g, n;
	
	cin >> b >> g >> n;
	
	cout << min(b, n) - (n - min(g, n)) + 1 << "\n";
	
	return 0;
}