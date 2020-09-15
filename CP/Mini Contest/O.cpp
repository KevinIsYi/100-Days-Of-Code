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

void solve() {
	
	int n, twos = 0, threes = 0;
	
	cin >> n;
	
	while(n % 2 == 0) {
		n /= 2;
		++twos;
	}
	while(n % 3 == 0) {
		n /= 3;
		++threes;
	}
	if (n == 1 && twos <= threes) {
		cout << 2 * threes - twos << "\n";
	}
	else {
		cout << "-1\n";
	}
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