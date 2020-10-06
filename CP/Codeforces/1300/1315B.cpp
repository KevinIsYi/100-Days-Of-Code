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
	int a, b, p, i;
	string str;
	
	cin >> a >> b >> p >> str;
	
	for (i = (int)str.size() - 2 ; i > -1 ; --i) {
		if (str[i] == 'A' && p < a) {
			break;
		}
		if (str[i] == 'B' && p < b) {
			break;
		}
		if (str[i] == 'A') {
			p -= a;
		}
		else if (str[i] == 'B') {
			p -= b;
		}
		
		while(i > 0 && str[i] == str[i - 1]) {
			--i;
		}
	}
	cout << i + 2 << "\n";
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