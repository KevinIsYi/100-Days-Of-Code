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

string str[100];
char b[100];
int n, m, i, k, q;

void dfs(int t, char chr) {

	if (n == t) {
		++k;
	}
	else {
		for (int j = 1 ; j <= m ; ++j) {
			if (b[j] == chr) {
				dfs(t + 1, str[j][0]);
			}
		}
	}
	
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	cin >> n >> m;
	for (int i = 1 ; i <= m ; ++i) {
		cin >> str[i] >> b[i];
	}
	
	dfs(1, 'a');
	cout << k << "\n";
	
	return 0;
}