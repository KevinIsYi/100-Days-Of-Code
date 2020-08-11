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

void solve() {

	int n, eachN, curr;
	bool can, improve(false);
	vector<bool> taken(n + 1, false);
	vector<pair<bool, set<int>>> grid;
	
	cin >> n;
	
	for (int i = 0 ; i < n ; ++i) {
		cin >> eachN;
		
		set<int> st;
		for (int j = 0 ; j < eachN ; ++j) {
			cin >> curr;
			
			st.insert(curr);
		}
		
		grid.pb(make_pair(false, st));
	}
	
	for (int i = 0 ; i < n ; ++i) {
		can = false;
		
		for (int number : grid[i].second) {
			if (!taken[number]) {
				can = true;
				taken[number] = true;
				grid[i].first = true;
				break;
			}
		}
		if (!can) {
			improve = true;
		}
	}
	
	
	if (improve) {
		for (int i = n - 1 ; i >= 0 ; --i) {
			if (!grid[i].first) {
				for (int j = 1 ; j <= n ; ++j) {
					if (!taken[j] && !grid[i].second.count(j)) {
						cout << "IMPROVE\n" << i + 1 << " " << j << "\n";
						return;
					}
				}
			}
		}	
	}
	
	cout << "OPTIMAL\n";
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