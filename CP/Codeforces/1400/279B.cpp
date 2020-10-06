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
	
	int n, t, curr = 0, ans = 0;
	
	cin >> n >> t;
	vector<int> vct(n);
	
	for (int & val : vct) {
		cin >> val;
	}
	
	for (int i = 0, j = 0, prev = 0 ; i < n ; ++i) {
		curr -= prev;
		
		while(j < n && vct[j] + curr <= t) {
			curr += vct[j];
			++j;
		}
		
		
		ans = max(ans, j - i);
		prev = vct[i];
	}
	
	cout << ans << "\n";
	
	
	return 0;
}