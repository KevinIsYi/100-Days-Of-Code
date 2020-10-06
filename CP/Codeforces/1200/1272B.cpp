#include <bits/stdc++.h>

using namespace std;

#define all(x) x.begin(), x.end()
#define allr(x) x.rbegin(), x.rend()
#define pb(x) push_back(x)
#define mp(x, y) make_pair(x, y);

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

template <typename T>
vector<T> allDivisors(T n) {
	vector<T> divisors;
	
	for (int i = 1 ; i <= sqrt(n) ; ++i) {
		if (n % i == 0) {
			divisors.push_back(i);
			if (n / i != i) {
				divisors.push_back(n / i);
			}
		}
	}
	return divisors;
}

void solve() {

	int x, y, up(0), down(0), left(0), right(0);
	string str;
	
	cin >> str;
	
	for (char chr : str) {
		switch(chr) {
			case 'L':
				++left;
				break;
			case 'R':
				++right;
				break;
			case 'U':
				++up;
				break;
			case 'D':
				++down;
		}
	}
	
	y = min(right, left);
	x = min(up, down);
	
	if (x == 0 && y > 0) {
		cout << "2\nLR";
	}
	else if (y == 0 && x > 0) {
		cout << "2\nUD";
	}
	else if(x == 0 && y == 0) {
		cout << "0\n";
	}
	else {
		up = x * 2 + y * 2; //used as aux
		
		cout << up << "\n";
		for (int i = 0 ; i < x ; ++i) {
			cout << 'D';
		}
		for (int i = 0 ; i < y ; ++i) {
			cout << 'R';
		}
		for (int i = 0 ; i < x ; ++i) {
			cout << 'U';
		}
		for (int i = 0 ; i < y ; ++i) {
			cout << 'L';
		}
	}
	
	cout << "\n";
	
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int t;
	
	cin >> t;
	while(t--) {
		solve();
	}
	
	return 0;
}