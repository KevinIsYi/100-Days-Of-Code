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

void solve() {

	int n;
	bool can;
	
	cin >> n;
	vector<bool> taken(n * 2 + 2, false);
	vector<int> arr(n);
	vector<int> ans;
	
	for (int & num : arr) {
		cin >> num;
		taken[num] = true;
	}
	
	for (int num : arr) {
		can = false;
		
		for (int i = num + 1 ; i <= n * 2 ; ++i) {
			if (!taken[i]) {
				can = true;
				taken[i] = true;
				ans.pb(num);
				ans.pb(i);
				break;
			}
		}
		if (!can) {
			cout << "-1\n";
			return;
		}
	}
	
	for (int num : ans) {
		cout << num << " ";
	}
	cout << "\n";
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