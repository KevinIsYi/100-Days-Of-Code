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
	
	int n, x, y, z;
	
	cin >> n;
	vector<vector<int>> vct(n, vector<int>(3));
	
	for (vector<int> & vc : vct) {
		for (int & val : vc) {
			cin >> val;
		}
	}
	
	x = 0;
	y = 0;
	z = 0;
	
	
	for (vector<int> pa : vct) {
		x += pa[0];
		y += pa[1];
		z += pa[2];
	}
	
	if (x == 0 && y == 0 && z == 0) {
		cout << "YES\n";
	}
	else {
		cout << "NO\n";
	}
	
	return 0;
}