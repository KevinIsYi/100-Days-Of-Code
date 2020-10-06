#include <bits/stdc++.h>

using namespace std;

template <typename T>
T GCD(T a, T b) {
	return b ? GCD(b, a % b) : a;
}

long long LCD(long long a, long long b) {
	if (a < b) {
		swap(a, b);
	}
	a /= GCD(a, b);
	
	return a * b;
}

template <typename T>
vector<int> allDivisors(T n) {
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

/* ------------------------------------------ */

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int n, x;
	
	cin >> n;
	
	if (n <= 2) {
		cout << "No\n";
		return 0;
	}
	cout << "Yes\n";
	if (n % 2 == 0) {
		x = n / 2;
	}
	else {
		x = (n + 1) / 2;
	}
	
	cout << "1 " << x << "\n";
	cout << n - 1 << " ";
	for (int i = 1 ; i <= n ; ++i) {
		if (i != x) {
			cout << i << " ";
		}
	}
	cout << "\n";
	
	return 0;
}