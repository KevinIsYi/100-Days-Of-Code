#include <bits/stdc++.h>

using namespace std;

#define all(x) x.begin(), x.end()
#define allr(x) x.rbegin(), x.rend()
#define pb(x) push_back(x)

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
	char mn(str[0]);
	
	for (int i = 0 ; i < (int)str.size() ; ++i) {
		bool can = false;
		
		if (str[i] > mn) {
			cout << "Ann\n";
		}
		else {
			cout << "Mike\n";
		}
		
		mn = min(str[i], mn);
	}
	
	return 0;
}