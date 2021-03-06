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

const int mxn = 2e5 + 1;
int arr[mxn];

void solve() {
	
	int n, k, odds(0);
	
	cin >> n >> k;
	for (int i = 1 ; i <= n ; ++i) {
		cin >> arr[i];
		
		odds += arr[i] % 2 == 1;
	}
	
	
	if (odds < k) {
		cout << "NO\n";
	}
	else {
		if (odds % 2 == k % 2) {
			cout << "YES\n";
			
			for (int i = 1 ; i <= n && k > 1; ++i) {
				if (arr[i] % 2 == 1) {
					cout << i << " ";
					--k;
				}
			}
			cout << n << "\n";
		}
		else {
			cout << "NO\n";
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