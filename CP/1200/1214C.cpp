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
	
	int n;
	string str;
	
	cin >> n >> str;
	
	if (n % 2 == 1) {
		cout << "No\n";
	}
	else {
		int count = 0;
		
		for (char ch : str) {
			if (ch == '(') {
				count++;
			}
			else {
				count--;
			}
			
			if (count < - 1) {
				cout << "No\n";
				return 0;
			}
		}
		
		if (count >= -1 && count <= 1) {
			cout << "Yes\n";
		}
		else {
			cout << "No\n";
		}
	}
	
	return 0;
}