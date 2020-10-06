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

int arr[400];

void solve() {
	
	long long n;
	long long area, curr;
	bool can = true;
		
	cin >> n;
	for (long long i = 0 ; i < n * 4 ; ++i) {
		cin >> arr[i];
	}
		
	sort(arr, arr + n * 4);
	area = arr[0] * arr[n * 4 - 1];
	
	for (long long i = 0 ; i < n ; ++i) {
		long long first = i * 2, last = 4 * n - (i * 2) - 1;
		
		if (arr[first] != arr[first + 1] || arr[last] != arr[last - 1] || arr[first] * arr[last] != area) {
			can = false;
			break;
		}
	}
	
	if (can) {
		cout << "YES\n";
	}
	else {
		cout << "NO\n";
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