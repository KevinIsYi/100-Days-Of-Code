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
	
	int n, each, maxD(2e5 + 1);
	unordered_map<int, vector<int>> map;
	
	cin >> n;
	for (int i = 1 ; i <= n ; ++i) {
		cin >> each;
		map[each].pb(i);
	}
	
	if ((int)map.size() == n) {
		cout << "-1\n";
	}
	else {
		for (pair<int, vector<int>> pa : map) {
			
			for (int i = 1 ; i < (int)pa.second.size() ; ++i) {
				maxD = min(abs(pa.second[i] - pa.second[i - 1]), maxD);
			}
		}
		cout << maxD + 1 << "\n";
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