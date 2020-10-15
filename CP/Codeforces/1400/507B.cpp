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


int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int r, x1, y1, x2, y2, ans = 0;
	
	cin >> r >> x1 >> y1 >> x2 >> y2;
	
	ans = ceil(sqrt(pow(abs(x2 - x1), 2) + (pow(abs(y2 - y1), 2))));
	
	ans = ceil(ans, 2 * r);
	
	cout << ans << "\n";
	
	return 0;
}