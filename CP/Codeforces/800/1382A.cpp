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
	
	int t, n, m, each, value;
	bool can;
	
	cin >> t;
	while(t--) {
		cin >> n >> m;
		unordered_set<int> st;
		can = false;
		
		for (int i = 0 ; i < n ; ++i) {
			cin >> each;
			st.insert(each);
		}
		for (int i = 0 ; i < m ; ++i) {
			cin >> each;
			if (st.count(each)) {
				can = true;
				value = each;
			}
		}
		
		if (can) {
			cout << "YES\n1 " << value << "\n";
		}
		else {
			cout << "NO\n";
		}
	}
	
	return 0;
}