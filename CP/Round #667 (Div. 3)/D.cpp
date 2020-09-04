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

long long sumd(long long n) {
	
	long long res = 0;

	while(n > 0) {
		
		res += (n % 10);
		n /= 10;
	}

	return res;
}
	

void solve() {
	
	long long n, s, ans = 0, ten = 10;
	
	cin >> n >> s;
	
	while(sumd(n) > s) {
		ans += ten - (n % ten);
		n += ten - (n % ten);
		
		ten *= 10;
	}
	
	
	cout << ans << "\n";
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