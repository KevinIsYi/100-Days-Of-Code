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
	
	int a, b;
	set<string> f, s, inter;
	string str;
	
	cin >> a >> b;
	for (int i = 0 ; i < a ; ++i) {
		cin >> str;
		f.insert(str);
	}
	for (int i = 0 ; i < b ; ++i) {
		cin >> str;
		s.insert(str);
	}
	
	for (string str : f) {
		if(s.count(str)) {
			inter.insert(str);
		}
	}
	
	a -= (int)inter.size();
	b -= (int)inter.size();
	
	if ((int)inter.size() % 2 == 1) {
		++a;
	}
	
	if (a > b) {
		cout << "YES\n";
	}
	else {
		cout << "NO\n";
	}
	
	return 0;
}