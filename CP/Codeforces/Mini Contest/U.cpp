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
	
	int n, x, ans = 0;
	
	cin >> n >> x;
	vector<int> vct(n);
	
	for (int & val : vct) {
		cin >> val;
	}
	
	sort(allr(vct));
	
	for (int i = 0 ; i < n ; ++i) {
		if (vct[i] >= x) {
			++ans;
		}
		else {
			for (int j = i + 1, k = 2 ; j < n ; ++j, ++i, ++k) {
				if (k * vct[j] >= x) {
					++ans;
					break;
				}
			}
			++i;
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