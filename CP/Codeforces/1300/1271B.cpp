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
	
	int n;
	string str;
	vector<int> ans;
	
	cin >> n >> str;
	for (int i = 0 ; i < n - 1; ++i) {
		
		if (str[i] == 'B') {
			str[i] = 'W';
			str[i + 1] = str[i + 1] == 'B' ? 'W' : 'B';
			ans.pb(i + 1);
		}
	}

	if (str[n - 1] != 'W') {
		for (int i = 0 ; i < n - 1 ; ++i) {
			if (str[i] == 'W') {
				str[i + 1] = str[i + 1] == 'W' ? 'B' : 'W';
				ans.pb(i + 1);
			}
		}
		if (str[n - 1] != 'B') {
			cout << "-1\n";
		}
		else {
			cout << ans.size() << "\n";
			for (int val : ans) {
				cout << val << " ";
			}
		}
	}
	else {
		cout << ans.size() << "\n";
		for (int val : ans) {
			cout << val << " ";
		}
	}
	
	return 0;
}