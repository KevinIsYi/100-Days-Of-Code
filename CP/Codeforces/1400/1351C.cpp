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
	
	set<pair<int, int>> st;
	int x = 0, y = 0, a, b, ans = 0;
	string str;
	cin >> str;
	
	for (char chr : str) {
		a = x;
		b = y;
		
		if (chr == 'N') {
			++y;
		}
		else if (chr == 'S') {
			--y;
		}
		else if (chr == 'E') {
			++x;
		}
		else {
			--x;
		}
		
		cout << x + a << ", " << y + b << "\n";
		
		if (!st.count(mp(x + a, y + b))) {
			st.insert(mp(x + a, y + b));
			ans += 5;
		}
		else {
			++ans;
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