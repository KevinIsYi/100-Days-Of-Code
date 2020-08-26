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
	
	int a, b, c, d;
	
	cin >> a >> b >> c >> d;
	
	cout << (a != c) + (b != d) << " ";
	
	if ((a % 2 == c % 2) == (b % 2 == d % 2)) {
		
		int f = a, s = b, aux = a, aux2 = b;
		
		while(f > 1 && s > 1) {
			--f;
			--s;
		}
		while(aux > 1 && aux2 < 8) {
			--aux;
			++aux2;
		}
		
		bool can = false;
		for (int i = 1 ; i <= 8 ; ++i) {
			if (f == c && s == d || aux == c && aux2 == d) {
				can = true;
				break;
			}
			
			++f;
			++s;
			++aux;
			--aux2;
		}	
		if (can) {
			cout << "1 ";
		}
		else {
			cout << "2 ";
		}
	}
	else {
		cout << "0 ";
	}
	
	
	int king = min(abs(a - c), abs(b - d));
	
	cout << king + (max(abs(a - c), abs(b - d)) - king) << "\n";
	
	return 0;
}