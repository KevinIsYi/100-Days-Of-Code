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

const int mxn = 100001 * 3;
int dp[7] = {mxn, mxn, mxn, mxn, mxn, mxn, mxn};
bool letters[3] = {0, 0, 0};

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int n, curr;
	string aux;
	
	cin >> n;
	
	for (int i = 0 ; i < n ; ++i) {
		cin >> curr >> aux;
		
		sort(all(aux));
		
		if (aux == "A" || aux == "B" || aux == "C") {
			dp[aux[0] - 'A'] = min(dp[aux[0] - 'A'], curr);
			letters[aux[0] - 'A'] = 1;
		}
		else {
			if (aux == "AB") {
				dp[3] = min(dp[3], curr);
				letters[0] = 1;
				letters[1] = 1;
			}
			else if (aux == "BC") {
				dp[4] = min(dp[4], curr);
				letters[1] = 1;
				letters[2] = 1;
			}
			else if(aux == "AC") {
				dp[5] = min(dp[5], curr);
				letters[0] = 1;
				letters[2] = 1;
			}
			else {
				dp[6] = min(dp[6], curr);
				
				for (int i = 0 ; i < 3 ; ++i) {
					letters[i] = 1;
				}
			}
		}
	}
	
	if (letters[0] && letters[1] && letters[2]) {
		int ans = 1e9 + 1;
		
		ans = min(ans, dp[0] + dp[1] + dp[2]);
		ans = min(ans, dp[0] + dp[4]);
		ans = min(ans, dp[0] + dp[6]);
		ans = min(ans, dp[1] + dp[5]);
		ans = min(ans, dp[1] + dp[6]);
		ans = min(ans, dp[2] + dp[3]);
		ans = min(ans, dp[2] + dp[6]);
		
		ans = min(ans, dp[3] + dp[4]);
		ans = min(ans, dp[3] + dp[5]);
		ans = min(ans, dp[3] + dp[6]);
		ans = min(ans, dp[4] + dp[3]);
		ans = min(ans, dp[4] + dp[5]);
		ans = min(ans, dp[4] + dp[6]);
		ans = min(ans, dp[5] + dp[3]);
		ans = min(ans, dp[5] + dp[4]);
		ans = min(ans, dp[5] + dp[6]);	
		
		ans = min(ans, dp[6]);
		
		cout << ans << "\n";
	}
	else {
		cout << "-1\n";
	}
	
	return 0;
}