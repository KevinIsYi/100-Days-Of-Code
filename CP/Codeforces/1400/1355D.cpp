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
	
	int n, s;
	cin >> n >> s;
	
	if (n == 1) {
		if (s == 1) {
			cout << "NO\n";
		}
		else {
			cout << "YES\n" << s << "\n" << s - 1 << "\n";
		}
	}
	else {
		if (s - n + 1 > n) {
			cout << "YES\n";
			
			for (int i = 0 ; i < n - 1 ; ++i) {
				cout << "1 ";
			}
			cout << s - n + 1 << "\n" <<  s - n << "\n";
		}
		else {
			cout << "NO\n";
		}
	}
	
	return 0;
}