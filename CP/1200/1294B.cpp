#include <bits/stdc++.h>

using namespace std;

#define all(x) x.begin(), x.end()
#define allr(x) x.rbegin(), x.rend()
#define pb(x) push_back(x)
#define mp(x, y) make_pair(x, y);

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

pair<int, int> pairs[1000];


void solve() {
	int n, minF(0), minS(0), prevF(0), prevS(0);
	string ans;
	
	cin >> n;
	
	for (int i = 0 ; i < n ; ++i) {
		cin >> pairs[i].first >> pairs[i].second;
	}
	
	sort(pairs, pairs + n);
	
	for (int i = 0 ; i < n ; ++i) {
		if (pairs[i].first < minF || pairs[i].second < minS) {
			cout << "NO\n";
			return;
		}
		minF = max(minF, pairs[i].first);
		minS = max(minS, pairs[i].second);
	
		for (int j = prevF ; j < pairs[i].first ; ++j) {
			ans.pb('R');
		}
		for (int j = prevS ; j < pairs[i].second ; ++j) {
			ans.pb('U');
		}
		
		prevF = pairs[i].first;
		prevS = pairs[i].second;
	}
	
	cout << "YES\n" << ans << "\n";
		
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