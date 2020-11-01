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

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int n, ans = 0, mod = 1e9 + 7;
	cin >> n;
	
	bool can = true;
	
	map<int, int> mp;
	for (int i = 0 ; i < n ; ++i) {
		int curr;
		cin >> curr;
		
		mp[curr]++;
		
		if (mp[curr] > 2) {
			can = false;
		}
		if (curr == 0 && mp[0] > 1) {
			can = false;
		}
		if (n % 2 == curr % 2) {
			can = false;
		}
		
		ans += mp[curr] == 2;
	}
	
	if (can) {
		int res = 1;
		for (int i = 0 ; i < ans ; ++i) {
			res = res * 2;
			res %= mod;
		}
		
		cout << res << "\n";
	}
	else {
		cout << "0\n";
	}
	
	return 0;
}