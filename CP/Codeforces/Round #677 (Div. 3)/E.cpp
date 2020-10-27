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

const int N = 21;
long long f[N];

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int n;
	cin >> n;
	
	f[0] = 1;
	for (int i = 1 ; i < N ; ++i) {
		f[i] = f[i - 1] * i;
	}
	
	for (int i = 1 ; i < N ; ++i) {
		cout << f[i] << " ";
	}
	cout << endl;
	
	long long ans = f[n] / f[n / 2] / f[n / 2];
	ans = ans * f[n / 2 - 1];
	ans = ans * f[n / 2 - 1];
	ans /= 2;
	
	cout << ans << "\n";
	
	return 0;
}