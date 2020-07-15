#include <bits/stdc++.h>

using namespace std;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	long long n, s;
	
	cin >> n;
	s = (long long)sqrt(n);
	
	cout << "s: " << s << endl;
	
	if (s * s == n) {
		s *= 2;
	}
	else {
		s = 2 * sqrt(n) + 1;
	}	
	
	cout << s << "\n";
	
	return 0;
}