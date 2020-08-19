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
	
	int n, val, mx(-1), ans(0);
	cin >> n;
	map<int, int> mp;
	vector<int> first(n + 1), second(n + 1), left(n + 1);
	
	for (int i = 1 ; i <= n ; ++i) {
		cin >> first[i];
	}
	
	for (int i = 1 ; i <= n ; ++i) {
		cin >> val;
		mp[val] = i;
	}
	
	for (int i = 1 ; i <= n ; ++i) {
		left[i] = mp[first[i]];
	}
	
	
	for (int i = 1 ; i <= n ; ++i) {
		if (left[i] > mx) {
			mx = left[i];
		}
		else {
			++ans;
		}
	}
	
	cout << ans << "\n";
		
	
	return 0;
}