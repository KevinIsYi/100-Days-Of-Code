#include <bits/stdc++.h>

using namespace std;

#define all(x) x.begin(), x.end()
#define allr(x) x.rbegin(), x.rend()

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

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int t, n, k, ans, left, right, space, i, j;
	string str;
	
	cin >> t;
	while(t--) {
		cin >> n >> k >> str;
		ans = 0;
		i = 0;
		
		while(i < n) {
			j = i + 1;
			while(j < n && str[j] == '0') {
				j++;
			}
			
			left = (str[i] == '1') ? k : 0;
			right = (j < n && str[j] == '1') ? k : 0;
			space = j - i;
			
			if (left == k) {
				space--;
			}
			
			space -= (left + right);
			
			if (space > 0) {
				ans += (space + k) / (k + 1);
			}
			i = j;
		}
		
		cout << ans << "\n";
			
	}
	
	return 0;
}