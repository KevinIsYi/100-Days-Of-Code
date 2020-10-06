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

int a[51][51], b[51][51];

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int n, m, oldOne(0), newOne(0);
	vector<pair<int, int>> ans;
	
	cin >> n >> m;
	
	for (int i = 1 ; i <= n ; ++i) {
		for (int j = 1 ; j <= m ; ++j) {
			cin >> a[i][j];
			
			oldOne += a[i][j] == 1;
			b[i][j] = 0;
		}
	}
	
	for (int i = 1 ; i < n ; ++i) {
		for (int j = 1 ; j < m ; ++j) {
			if (a[i][j] == 1 && a[i][j + 1] == 1 && a[i + 1][j] == 1 && a[i + 1][j + 1] == 1) {
				if (b[i][j] == 0) {
					b[i][j] = 1;
					++newOne;
				}
				if (b[i][j + 1] == 0) {
					b[i][j + 1] = 1;
					++newOne;
				}
				if (b[i + 1][j] == 0) {
					b[i + 1][j] = 1;
					++newOne;
				}
				if (b[i + 1][j + 1] == 0) {
					b[i + 1][j + 1] = 1;
					++newOne;
				}
				
				ans.pb(mp(i, j));
			}
		}
	}
	
	if (newOne != oldOne) {
		cout << "-1\n";
	}
	else {
		cout << ans.size() << "\n";
		for (pair<int, int> pa : ans) {
			cout << pa.first << " " << pa.second << "\n";
		}
	}
	
	return 0;
}