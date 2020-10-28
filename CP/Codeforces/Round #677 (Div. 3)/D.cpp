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
	bool can = true;
	cin >> n;
	
	vector<int> vct(n);
	for (int & val : vct) {
		cin >> val;
	}
	
	vector<pair<int, int>> ans;
	int idx = -1;
	for (int i = 0 ; i < n ; ++i) {
		if (vct[i] != vct[0]) {
			idx = i;
			ans.pb(mp(1, i + 1));
		}
	}
	
	if (idx == -1) {
		cout << "NO\n";
	}
	else {
		for (int i = 1 ; i < n ; ++i) {
			if (vct[i] == vct[0]) {
				ans.pb(mp(idx + 1, i + 1));
			}
		}
		cout << "YES\n";
		for (pair<int, int> pa : ans) {
			cout << pa.first << " " << pa.second << "\n";
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