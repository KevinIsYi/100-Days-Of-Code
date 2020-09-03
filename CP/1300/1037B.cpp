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
	
	int n, s;
	
	cin >> n >> s;
	vector<int> vct(n);
	
	for (int & nu : vct) {
		cin >> nu;
	}
	
	sort(allr(vct));
	long long ans = 0, aux = 0;
	
	for (int i = 0, j = n - 1 ; i <= n / 2 ; ++i, --j) {
		if (vct[i] < s) {
			ans += (long long) s - vct[i];
		}	
		if (vct[j] > s) {
			aux += (long long) vct[j] - s;
		}
	}
	
	if (ans > 0 && aux > 0) {
		cout << min(aux, ans) << "\n";
	}
	else {
		cout << max(aux, ans) << "\n";
	}
	
	
	return 0;
}