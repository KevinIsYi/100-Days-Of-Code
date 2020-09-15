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
	
	bool find = false;
	for (int i = 1 ; i < (int)str.size() ; ++i) {
		if (str[i] == '0') {
			find = true;
			str.erase(i, 1);
			break;
		}
	}
	
	if (find) {
		cout << str << "\n";
	}
	else {
		str.erase(0, 1);
		cout << str << "\n";
	}
	
	return 0;
}