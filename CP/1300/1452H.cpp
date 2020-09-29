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
	int a, b, c, d;
	
	cin >> a >> b >> c >> d;
	
	if (a == 0 && d == 0) {
		if (b % 2 == 1) {
			cout << "Tidak Ya Tidak Tidak\n";
		}
		else {
			cout << "Tidak Tidak Ya Tidak\n";
		}
	}
	else if (b == 0 && c == 0) {
		if (a % 2 == 1) {
			cout << "Ya Tidak Tidak Tidak\n";
		}
		else {
			cout << "Tidak Tidak Tidak Ya\n";
		}
	}
	else {
		if ((a + b) % 2 == 1) {
			cout << "Ya Ya Tidak Tidak\n";
		}
		else {
			cout << "Tidak Tidak Ya Ya\n";
		}
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