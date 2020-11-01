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

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int n;
	double a = 0, b = 0, c = 0;
	cin >> n;
	
	for (int i = 0 ; i < n ; ++i) {
		double x;
		cin >> x;
		
		x = abs(x);
		a += x;
		
		c = max(c, x);
		b += pow(x, 2);
	}
	
	b = sqrt(b);
	
	printf("%.15f\n%.15f\n%.15f\n", a, b, c);
	
	return 0;
}