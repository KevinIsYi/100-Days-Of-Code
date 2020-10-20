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

void solve() {
	int n;
	map<int, vector<int>, greater<int>> mp;
	
	cin >> n;
	vector<int> vct(n);
	for (int i = 0 ; i < n ; ++i) {
		cin >> vct[i];
		mp[vct[i]].pb(i);
	}
	
	if (mp.size() == 1) {
		cout << "-1\n";
	}
	else {
		bool can = false;
		for (int val : mp.begin()->second) {
			if (val == 0 && vct[1] != vct[0]) {
				can = true;
			}
			if (val == n - 1 && vct[val - 1] != vct[val]) {
				can = true;
			}
			if (val != 0 && val != n - 1) {
				if (vct[val - 1] != vct[val]  || vct[val + 1] != vct[val]) {
					can = true;
				}
			}
			
			if (can) {
				cout << val + 1 << "\n";
				return;
			}
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