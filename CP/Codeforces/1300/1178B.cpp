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
	long long a = 0, b = 0, c = 0;
	cin >> str;
	
	for (int i = 0 ; i < (int)str.size() ; ++i) {
		if (str[i] == 'o') {
			b += a;
		}
		else if(i > 0 && str[i - 1] == 'v') {
			++a;
			c += b;
		}
	}
	cout << c << "\n";
	
	return 0;
}