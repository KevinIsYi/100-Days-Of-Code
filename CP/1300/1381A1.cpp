#include <bits/stdc++.h>

using namespace std;

#define all(x) begin(x), end(x)
#define allr(x) rbegin(x), rend(x)

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
	
	int t, n;
	string f, s;
	
	cin >> t;
	while(t--) {
		cin >> n >> f >> s;
		vector<int> vct;
		for (int i = 0 ; i < n ; ++i) {
			if (f[i] != s[i]) {
				if (i > 0) {
					vct.push_back(i + 1);
				}
				vct.push_back(1);
				if (i > 0) {
					vct.push_back(i + 1);
				}
			}
		}
		cout << vct.size() << " ";
		for (int num : vct) {
			cout << num << " ";
		}
		cout << "\n";
	}
	
	return 0;
}