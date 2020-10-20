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
	map<int, vector<int>> mp;
	for (int i = 0 ; i < n ; ++i) {
		cin >> vct[i];
	}

	for (int i = 0 ; i < n ; ++i) {
		mp[vct[i]].pb(i);
	
		if ((int)mp[vct[i]].size() > n / 2) {
			can = false;
			break;
		}
		
	}
	
	
	if (can) {
		cout << "YES\n";
		
		bool find;
		int va = 0;
		set<pair<int, int>> ans;
		
		for (pair<int, vector<int>> pa : mp) {
			for (pair<int, vector<int>> s : mp) {
				if (pa.first != s.first) {
					for (int val : pa.second) {
						for (int val2 : s.second) {
							if (va < n - 1 && !ans.count(mp(pa.first, val2 + 1))) {
								ans.insert(mp(val + 1, val2 + 1));
								++va;
							}
						}
					}
				}
			}
		}
		
		
		for (pair<int, int> pa : ans) {
			cout << pa.first << " " << pa.second << "\n";
		}
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