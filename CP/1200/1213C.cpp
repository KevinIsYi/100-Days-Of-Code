#include <bits/stdc++.h>

using namespace std;

#define all(x) x.begin(), x.end()
#define allr(x) x.rbegin(), x.rend()
#define pb(x) push_back(x)
#define mp(x, y) make_pair(x, y);

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

int arr[10];

void solve() {
	
	long long n, m, div, curr, ans(0);
	
	cin >> n >> m;
	div = n / m;
	
	arr[0] = m % 10;
	for (int i = 1 ; i < 10 ; ++i) {
		arr[i] = arr[i - 1] + (m * (i + 1)) % 10;
	}
	
	curr = div / 10;
	
	ans += arr[9] * curr;
	curr = div % 10;

	if (curr != 0) {
		ans += arr[curr - 1];
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