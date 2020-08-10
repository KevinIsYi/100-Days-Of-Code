#include <bits/stdc++.h>

using namespace std;

#define all(x) x.begin(), x.end()
#define allr(x) x.rbegin(), x.rend()
#define pb(x) push_back(x)

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

void solve() {
	
	int n, curr;
	string numb, s1, s2;
	char chr;
	
	cin >> n >> numb;
	
	
	for (int i = 0 ; i < n ; ++i) {
		if (numb[i] == '1') {
			s1.pb('1');
			s2.pb('0');
			
			while(++i < n) {
				s2.pb(numb[i]);
				s1.pb('0');
			}
			
			break;
		}
		else if (numb[i] == '2') {
			chr = '1';
		}
		else {
			chr = '0';
		}
		
		s1.pb(chr);
		s2.pb(chr);
		
	}
	
	cout << s1 << "\n" << s2 << "\n";
	
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int t;
	
	cin >> t;
	while(t--) {
		solve();
	}
	
	return 0;
}