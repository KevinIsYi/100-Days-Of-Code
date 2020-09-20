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
	int n, odd = 0, even = 0;
	string str;
	
	cin >> n >> str;
	
	if (n == 1) {
		cout << (str[0] % 2 == 1 ? "1\n" : "2\n");
		return;
	}
	for (int i = 0 ; i < n ; ++i) {
		if (i % 2 == 0) {
			odd += str[i] % 2 == 1;
		}
		else {
			even += str[i] % 2 == 0;
		}
	}

	if (n % 2 == 1) {
		if (odd > 0) {
			cout << "1\n";
		}
		else {
			cout << "2\n";
		}
	}
	else {
		if (even > 0) {
			cout << "2\n";
		}
		else {
			cout << "1\n";
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