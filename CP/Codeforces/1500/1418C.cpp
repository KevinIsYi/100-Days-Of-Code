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
	
	int n, ans = 0;
	
	cin >> n;
	vector<int> vct(n);
	
	for (int & val : vct) {
		cin >> val;
	}

	ans += vct[0] == 1;
	
	for (int i = 1 ; i < n ; ++i) {
		if (vct[i] == 1) {
			int j = i;
			
			while(j < n && vct[j] == 1) {
				++j;
			}
			
			ans += (j - i) / 3;
			i = j - 1;
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