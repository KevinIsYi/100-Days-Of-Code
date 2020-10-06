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

const int mxn = 2e5;
int arr[mxn];

void solve() {
		
	map<int, int> mp;
	int n, k, mx(0);
	
	cin >> n >> k;
	
	for (int i = 0 ; i < n ; ++i) {
		cin >> arr[i];
	}
	
	for (int i = 0 ; i < n ; ++i) {
		if (arr[i] % k != 0) {
			++mp[k - arr[i] % k];
			mx = max(mx, mp[k - arr[i] % k]);
		}
	}
	
	long long ans = 0;
	for (pair<int, int> pa : mp) {
		if (pa.second == mx) {
			ans = k * 1ll * (pa.second - 1) + pa.first + 1;
		}
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