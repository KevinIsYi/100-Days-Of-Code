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
	cin >> str;
	
	bool can = true;
	set<char> seen, st;
	char of = 'a';
	
	for (char chr : str) {
		if (chr > of) {
			can = false;
			break;
		}
		if (chr == of) {
			++of;
		}
	}
	
	if (can) {
		cout << "YES\n";
	}
	else {
		cout << "NO\n";
	}
	
	return 0;
}