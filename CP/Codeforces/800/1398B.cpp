#include <bits/stdc++.h>

using namespace std;

#define all(x) x.begin(), x.end()
#define allr(x) x.rbegin(), x.rend()
#define pb(x) push_back(x)
#define mp(x, y) make_pair(x, y);

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

template <typename T>
vector<T> allDivisors(T n) {
	vector<T> divisors;
	
	for (int i = 1 ; i <= sqrt(n) ; ++i) {
		if (n % i == 0) {
			divisors.push_back(i);
			if (n / i != i) {
				divisors.push_back(n / i);
			}
		}
	}
	return divisors;
}

void solve() {
	
	string str;
	vector<int> moves;
	int ans = 0;
	
	cin >> str;
	
	for (int i = 0 ; i < (int)str.size() ; ++i) {
		if (str[i] == '1') {
			int j;
			for (j = i ; j + 1 < (int)str.size() && str[j + 1] == '1' ; ++j);
			moves.pb(j - i + 1);
			i = j;
		}
	}
	sort(allr(moves));
	for (int i = 0 ; i < (int)moves.size() ; i += 2) {
		ans += moves[i];
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