#include <bits/stdc++.h>

using namespace std;

#define all(x) x.begin(), x.end()
#define allr(x) x.rbegin(), x.rend()
#define pb(x) push_back(x)
#define mp(x, y) make_pair(x, y)

template <typename T>
T ceil(T a, T b) {
	return (a + b - 1) / b;
}

template <typename T>
T gcd(T a, T b) {
	return b ? gcd(b, a % b) : a;
}

long long lcd(long long a, long long b) {
	if (a < b) {
		swap(a, b);
	}
	a /= gcd(a, b);
	return a * b;
}


long long mn(int a, int b, int x, int y, int n) {
	
	int curr = min(a - x, n);
	a -= curr;
	n -= curr;
	
	curr = min(b - y, n);
	b -= curr;
	
	return (long long)a * b;
	
}


void solve() {

	int a, b, x, y, n;
	long long ans;
	
	cin >> a >> b >> x >> y >> n;
	
	cout << min(mn(a, b, x, y, n), mn(b, a, y, x, n)) << "\n";
	
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int t;
	
	cin >> t;
	while(t--) {
		solve();
	}
	
	return 0;
}