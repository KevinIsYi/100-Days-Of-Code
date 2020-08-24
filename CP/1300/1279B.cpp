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

const int mxn = 1e9 + 1;

void solve() {
	long long n, s;
	
	cin >> n >> s;
	vector<long long> arr(n);
	
	for (int i = 0 ; i < n ; ++i) {
		cin >> arr[i];
	}
	
	long long sum = 0, mx = 0;
	int ans = 0;
	for (int i = 0 ; i < n && sum <= s ; ++i) {
		if (arr[i] > mx) {
			mx = arr[i];
			ans = i + 1;
		}
		
		sum += arr[i];
	}

	if (sum > s) {
		cout << ans << "\n";
	}
	else {
		cout << "0\n";
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