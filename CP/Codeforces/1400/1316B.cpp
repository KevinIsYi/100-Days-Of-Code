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

string modf(string s, int n, int k) {
	string first = s.substr(k - 1, n - k + 1);
	string second = s.substr(0, k - 1);
	
	if (n % 2 == k % 2) {
		reverse(all(second));
	}
	return first + second;
}

void solve() {
	int n, cons, ans;
	char mn = 'z' + 1;
	string str;
	
	cin >> n >> str;
	
	string best = modf(str, n, 1);
	ans = 1;
	
	for (int k = 2 ; k <= n ; ++k) {
		string aux = modf(str, n, k);
		if (aux < best) {
			best = aux;
			ans = k;
		}
	}
	
	cout << best << "\n" << ans << "\n";
	
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