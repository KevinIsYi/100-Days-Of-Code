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
		
		long long n, mod = 1e9 + 7, sum = 0, ans = 0;

		cin >> n;
		vector<long long> vct(n);
		
		for (long long & val : vct) {
			cin >> val;
			
			sum += val;
			sum %= mod;
		}
		
		for (long long val : vct) {
			sum -= val;
			
			if (sum < 0) {
				sum += mod;
			}
			
			ans += val * sum;
			ans %= mod;
		}
		
		cout << ans << "\n";
		
		return 0;
	}