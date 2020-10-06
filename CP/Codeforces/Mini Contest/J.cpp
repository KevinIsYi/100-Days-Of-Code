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
	
	int n, k, curr, ans = -1;
	
	cin >> n >> k;
	
	vector<int> need(n), has(n);
	for (int & val : need) {
		cin >> val;
	}
	for (int & val : has) {
		cin >> val;
	}
		
	bool can = true;
	while(can) {
		++ans;
		for (int i = 0 ; i < n ; ++i) {
			if (need[i] > has[i]) {
				curr = need[i] - has[i];
				int aux = min(k, curr);
				
				has[i] += aux;
				k -= aux;
			}
			if (need[i] <= has[i]) {
				has[i] -= need[i];
			}
			else {
				can = false;
			}
		}
	}
	
	cout << ans << "\n";
		
	
	return 0;
}