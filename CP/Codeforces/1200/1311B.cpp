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


int n, m;
int arr[101];
int swa[101];

bool isSorted() {
	
	for (int i = 2 ; i <= n ; ++i) {
		if (arr[i] < arr[i - 1]) {
			return false;
		}
	}
	return true;
}

void solve() {

	bool can(true);
	cin >> n >> m;
	
	for (int i = 1 ; i <= n ; ++i) {
		cin >> arr[i];
	}
	for (int i = 1 ; i <= m ; ++i) {
		cin >> swa[i];
	}
	
	for (int i = 1 ; i <= n && can ; ++i) {
		can = false;
		for (int j = 1 ; j <= m ; ++j) {
			if (arr[swa[j]] > arr[swa[j] + 1]) {
				swap(arr[swa[j]], arr[swa[j] + 1]);
				can = true;
			}
		}
	}
	
	if (isSorted()) {
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