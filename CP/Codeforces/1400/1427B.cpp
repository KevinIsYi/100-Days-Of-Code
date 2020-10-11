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
	int n, k;
	string str;
	
	vector<pair<int, int>> surr, notsurr, l, r;
	bool left, right;
	int ans = 0;
	
	cin >> n >> k >> str;
	
	for (int i = 0 ; i < n ; ++i) {
		if (str[i] == 'L') {
			left = false;
			right = false;
			
			int started = i, curr = 1;
			
			if (i > 0 && str[i - 1] == 'W') {
				left = true;
			}
			
			while(++i < n && str[i] == 'L') {
				++curr;
			}	
			
			if (i < n && str[i] == 'W') {
				right = true;
			}
			
			if (left && right) {
				surr.emplace_back(curr, started);
			}
			else if(left) {
				l.emplace_back(curr, started);
			}
			else if(right) {
				r.emplace_back(curr, started);
			}
			else {
				notsurr.emplace_back(curr, started);
			}
		}
	}
	sort(all(surr));
	for (pair<int, int> pa : surr) {
		for (int i = 0, j = pa.second ; i < pa.first && k > 0 && j < n ; ++i, ++j, --k) {
			str[j] = 'W';
		}
		
		if (k <= 0) {
			break;
		}
	}
	
	if (k > 0) {
		sort(all(l));
		for (pair<int, int> pa : l) {
			for (int i = 0, j = pa.second ; i < pa.first && k > 0 && j < n ; ++i, ++j, --k) {
				str[j] = 'W';
			}
			if (k <= 0) {
				break;
			}
		}
	}
	
	if (k > 0) {
		sort(all(r));
		for (pair<int, int> pa : r) {
			for (int i = pa.first , j = pa.second + pa.first - 1 ; i >= 0 && k > 0 && j >= 0; --i, --j, --k) {
				str[j] = 'W';
			}
			if (k <= 0) {
				break;
			}
		}
	}
		
	if (k > 0) {
		for (pair<int, int> pa : notsurr) {
			for (int i = 0, j = pa.second ; i < pa.first && k > 0 && j < n ; ++i, ++j, --k) {
				str[j] = 'W';
			}
			if (k <= 0) {
				break;
			}
		}
	}
	
	
	for (int i = 0 ; i < n ; ++i) {
		if (str[i] == 'W') {
			++ans;
			
			for (i = i + 1 ; i < n && str[i] == 'W' ; ++i) {
				ans += 2;
			}
		}
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