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
	
	int n, each, ans = 0;
	cin >> n;
	vector<int> a(n), b(n);
	
	for (int & val : a) {
		cin >> val;
	}
	for (int & val : b) {
		cin >> val;
	}
	
	
	map<int, int> mp, left, right;
	
	for (int i = 0 ; i < n ; ++i) {
		mp[a[i]] = i;
	}
	
	for (int i = 0 ; i < n ; ++i) {
		int diff = abs(mp[b[i]] - i), val;
		
		if (i < mp[b[i]]) {
			++right[diff];
			
			val = right[diff];
		}
		else {
			++right[mp[b[i]] + n];
			val = right[mp[b[i]] + n];
		}
		
		if (i < mp[b[i]]) {
			++left[abs(i + n - mp[b[i]])];
			val = left[abs(i + n - mp[b[i]])];
		}
		else {
			++left[diff];
			val = left[diff];
		}
		ans = max(ans, val);
	}
	
	cout << ans << "\n";
	
	
	return 0;
}