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

void solve() {
	
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	string str;
	cin >> str;
	
	char curr = 'a';
	
	for (int i = 0 ; i < (int)str.size() && curr <= 'z' ; ++i) {
		if (str[i] <= curr) {
			str[i] = curr;
			++curr;
		}
	}
	
	if (curr <= 'z') {
		cout << "-1\n";
	}
	else {
		cout << str << "\n";
	}
	
	return 0;
}