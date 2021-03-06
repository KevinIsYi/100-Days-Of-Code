#include <bits/stdc++.h>

using namespace std;

#define all(x) begin(x), end(x)
#define allr(x) rbegin(x), rend(x)

template <typename T>
T GCD(T a, T b) {
	return b ? GCD(b, a % b) : a;
}

long long LCD(long long a, long long b) {
	if (a < b) {
		swap(a, b);
	}
	a /= GCD(a, b);
	return a * b;
}

template <typename T>
vector<T> allDivisors(T n) {
	vector<T> divisors;
	
	for (int i = 1 ; i <= sqrt(n) ; ++i) {
		if (n % i == 0) {
			divisors.push_back(i);
			if (n / i != i) {
				divisors.push_back(n / i);
			}
		}
	}
	return divisors;
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int d, n, m, x, y;
	
	cin >> n >> d >> m;
	bool can;
	while(m--) {
		can = true;
		cin >> x >> y;
		
		if ((!((x - y) <= d && (x - y) >= -d)) || 
		    (!((x + y) <= 2 * n - d && (x + y) >= d))) {
			cout << "NO\n";
		}
		else {
			cout << "YES\n";
		}
	}
	
	return 0;
}