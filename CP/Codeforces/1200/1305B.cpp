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

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	string str;
	cin >> str;
	vector<int> le, ri;
	int i = 0, j = (int)str.size() - 1;
	
	while(i < j) {
		while(i < (int)str.size() && str[i] == ')') {
			++i;
		}
		while(j >= 0 && str[j] == '(') {
			--j;
		}
		
		if (i < (int)str.size() && j >= 0 && i < j) {
			le.pb(i + 1);
			ri.pb(j + 1);
			++i;
			--j;
		}
	}
	
	if (le.empty()) {
		cout << "0\n";
	}
	
	else {
		cout << "1\n" << 2 * le.size() << "\n";
		
		for (int val : le) {
			cout << val << " ";
		}
		reverse(all(ri));
		for (int val : ri) {
			cout << val << " ";
		}
		cout << "\n";
	}
	
	return 0;
}