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

int pod(int n) {
    int product = 1;
    while(n > 0) {
        product *= n % 10;
        n /= 10;
    }
    return product;
}
 
int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int n, a, b(10), mxn;
	
	cin >> n;
	mxn = pod(n);
	a = n / 10;
	
	while(a > 0) {
		mxn = max(mxn, pod((a * b) - 1));
		a /= 10;
		b *= 10;
	}
	cout << mxn << " ";
	
	return 0;
}