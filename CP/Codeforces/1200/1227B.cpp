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

const int maxn = 1e5 + 1;
int n, a, b;
int numm[maxn], vis[maxn];

void solve() {

	int n, a, b;
	
	cin >> n;
	a = 0;
	b = 1;
	numm[0] = 0;
	
	for (int i = 1 ; i <= n ; ++i) {
		cin >> numm[i];
		
		if (numm[i] < i) {
			a = 1;
		}
	}
	
	if (a == 1) {
		cout << "-1\n";
	}
	else {
		
		for (int i = 1 ; i <= n ; ++i) {
			vis[i] = 0;
		}
		for (int i = 1 ; i <= n ; ++i) {
			if (numm[i] != numm[i - 1]) {
				vis[numm[i]] = 1;
				cout << numm[i] << " ";
			}
			else {
				while(vis[b]) {
					++b;
				}
				vis[b] = 1;
				cout << b << " ";
			}
		}
		cout << "\n";
	}
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