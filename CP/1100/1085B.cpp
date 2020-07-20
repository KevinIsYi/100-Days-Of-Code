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
	
	
	int n, k, curr, ans(INT_MAX);
	cin >> n >> k;
	
	for (int i = 1 ; i < k ; ++i) {
		if (n % i == 0) {
			curr = n / i * k + i;
			ans = min(ans, curr);
		}
	}
	
	cout << ans << "\n";
	
	return 0;
}