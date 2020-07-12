#include <bits/stdc++.h>

using namespace std;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	long long n;
	int last;
	cin >> n;
	
	last = n % 10;
	
	if (last >= 5) {
		n += 10 - last;
	}
	else {
		n -= last;
	}
	
	cout << n << "\n";
	
	return 0;
}