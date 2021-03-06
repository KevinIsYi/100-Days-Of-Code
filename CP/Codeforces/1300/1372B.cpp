#include <bits/stdc++.h>

using namespace std;

#define all(x) x.begin(), x.end()
#define allr(x) x.rbegin(), x.rend()

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

const int mxn = 2e9 + 1;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int t, n, a, maxA, maxB, ans;
	
	cin >> t;
	while(t--) {
		
		cin >> n;
		vector<int> vct(allDivisors(n));
		ans = mxn;
		
		for (int number : vct) {
			a = LCD(number, n - number);
			if (a < ans && a != 0) {
				ans = a;
				maxA = number;
				maxB = n - number;
			}
		}
		cout << maxA << " " << maxB << "\n";
	}
	
	return 0;
}