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
	
	bool can = false;
	int n;
	cin >> n ;
	
	vector<pair<int, int>> vct(n);
	
	for (pair<int, int> & pa : vct) {
		cin >> pa.first >> pa.second;
	}
	
	for (int i = 1 ; i < n - 1; ++i) {
		if (vct[i].first == vct[i].second) {
			if (vct[i - 1].first == vct[i - 1].second && vct[i + 1].first == vct[i + 1].second) {
				can = true;
			}
		}	
	}
	
	if (can) {
		cout << "Yes\n";
	}
	else {
		cout << "No\n";
	}
	
	return 0;
}