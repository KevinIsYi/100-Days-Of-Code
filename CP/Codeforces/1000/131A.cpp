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
	bool can;
	cin >> str;
	
	for (int i = 1 ; i < (int)str.size() ; ++i) {
		if (str[i] < 'a') {
			can = false;
		}
		else {
			can = true;
			break;
		}
	}
	
	if (!can) {
		if (str[0] < 'a') {
			str[0] += 32;
		}
		else {
			str[0] -= 32;
		}
		
		for (int i = 1 ; i < (int)str.size() ; ++i) {
			str[i] += 32;
		}
	}
	
	cout << str << "\n";
	
	
	return 0;
}