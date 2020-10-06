#include <bits/stdc++.h>

using namespace std;

#define all(x) begin(x), end(x)

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
	
	int n, a, b;
	bool can(false);
	
	cin >> n;
	for (int i = 0 ; i < n ; ++i) {
		cin >> a >> b;
		
		if (a != b) {
			can = true;
		}
	}
	
	if (can) {
		cout << "Happy Alex\n";
	}
	else {
		cout << "Poor Alex\n";
	}
	
	return 0;
}