#include <bits/stdc++.h>

using namespace std;

#define all(x) begin(x), end(x)
#define allr(x) rbegin(x), rend(x)

template <typename T>
T GCD(T a, T b) {
	return b ? GCD(b, a % b) : a;
}

long long LCD(long long a, long long b) {
	if (a < b) {
		swap(a, b);
	}
	a /= GCD(a, b);
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

const int maxn = 1e6 + 1;
long long arr[maxn];

long long sum(long long n) {
	return (n * (n + 1)) / 2;
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	long long t, mn, count, ans;
	string str;
	
	cin >> t;
	while(t--) {
		cin >> str;
		count = 0;
		mn = 0;
		ans = (int)str.size();
		
		for (int i = 0 ; i < (int)str.size() ; ++i) {
			if (str[i] == '+') {
				count++;
			}
			else {
				count--;
			}
			if (count < mn) {
				mn = count;
				ans += i + 1;
			}
		}
		cout << ans << "\n";
	}
	
	return 0;
}