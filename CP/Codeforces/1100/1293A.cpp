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

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int t;
	long long n, s, k, each, i;
	
	cin >> t;
	while(t--) {
		cin >> n >> s >> k;
		unordered_set<long long> st;
		
		for (int i = 0 ; i < k ; ++i) {
			cin >> each;
			st.insert(each);
		}
		
		i = 0;
		while(true) {
			if ((!st.count(s - i) && s - i > 0) || (!st.count(s + i) && s + i <= n)) {
				break;
			}
			++i;
		}
		cout << i << "\n";
	}
	return 0;
}