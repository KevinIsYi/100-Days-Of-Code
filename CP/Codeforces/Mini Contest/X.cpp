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
	
	string str;
	vector<int> vct;
	
	cin >> str;
	
	for (char chr : str) {
		if (chr != '+') {
			vct.pb(chr - '0');
		}
	}
	
	sort(all(vct));
	
	for (int i = 0 ; i < (int)vct.size() - 1; ++i) {
		cout << vct[i] << '+';
	}
	
	cout << vct[vct.size() - 1];
	
	return 0;
}