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


int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int n, one(0), two(0);
	
	cin >> n;
	
	for (int i = 0 ; i < n ; ++i) {
		int val;
		cin >> val;
		
		if (val == 1) {
			++one;
		}
		else {
			++two;
		}
	}
	
	if (one == 0 || two == 0) {
		char chr = one == 0 ? '2' : '1';
		
		for (int i = 0 ; i < n ; ++i) {
			cout << chr << " ";
		}
	}
	else {
		cout << "2 1 ";
		--one;
		--two;
		
		while(two--) {
			cout << "2 ";
		}
		while(one--) {
			cout << "1 ";
		}
	}
	
	
	
	return 0;
}