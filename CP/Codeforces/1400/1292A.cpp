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
	
	int n, q, blocked = 0;
	
	cin >> n >> q;
	vector<vector<int>> vct(2, vector<int>(n, 0));
	
	while(q--) {
		int x, y;
		cin >> x >> y;
		--x;
		--y;
		
		int delta = (vct[x][y] == 0) ? +1 : -1;
		
		vct[x][y] = 1 - vct[x][y];
		
		for (int i = - 1 ; i <= 1 ; ++i) {
			if (y + i < 0 || y + i >= n) {
				continue;
			}
			if (vct[1 - x][i + y] == 1) {
				blocked += delta;
			}
		}
		
		if (blocked == 0) {
			cout << "Yes\n";
		}
		else {
			cout << "No\n";
		}
	}
	
	
	return 0;
}