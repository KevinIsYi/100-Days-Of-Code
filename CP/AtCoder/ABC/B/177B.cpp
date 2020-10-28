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
	
	string big, small;
	cin >> big >> small;
	
	int ans = (int)small.size();
	
	
	for (int next = 0 ; next + (int)small.size() <= (int)big.size() ; ++next) {
		int curr = 0;
		
		for (int i = 0, j = next ; i < (int)small.size() ; ++i, ++j) {
			curr += small[i] != big[j];
		}
		
		ans = min(ans, curr);
	}
	
	cout << ans << "\n";
	
	return 0;
}