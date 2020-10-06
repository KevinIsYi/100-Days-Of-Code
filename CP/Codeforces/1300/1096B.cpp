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
	
	long long n, first = 1, last = 1;
	long long ans = 1;
	string str;
	
	cin >> n >> str;
	
	for (int i = 1 ; i < n && str[i] == str[0] ; ++i, ++first);
	for (int j = n - 2 ; j >= 0 && str[j] == str[n - 1] ; --j, ++last);
	
	if (str[0] != str[n - 1]) {
		ans = first + last + 1;
	}
	else {
		if (first == n) {
			ans = (n * (n + 1)) / 2;
		}
		else {
			ans = (first + 1ll) * (last + 1ll);
		}
	}
	
	cout << ans % 998244353 << "\n";
	
	return 0;
}