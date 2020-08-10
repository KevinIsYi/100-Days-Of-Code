#include <bits/stdc++.h>

using namespace std;

#define all(x) x.begin(), x.end()
#define allr(x) x.rbegin(), x.rend()
#define pb(x) push_back(x)

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

const int len = 2e5;
const int minVal = -1e9 - 1;
int arr[len];

void solve() {
	int n, count(0), j(0);
	
	cin >> n;
	for (int i = 0 ; i < n ; ++i) {
		cin >> arr[i];
	}
	
	vector<int> dp(n, minVal);
	
	if (n == 1) {
		dp[0] = max(dp[0], arr[0]);
	}
	
	
	for (int i = 1 ; i < n ; ++i) {
		dp[j] = max(arr[i - 1], dp[j]);
		if ((arr[i - 1] < 0) == (arr[i] > 0)) {
			++j;	
		}
		if (i + 1 == n) {
			dp[j] = max(dp[j], arr[i]);
		}
	}
	
	long long ans(0);
	for (int i = 0 ; i <= j ; ++i) {
		ans += dp[i];
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