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

const int mxn = 2e5;
int arr[mxn];
unordered_map<char, int> maps[mxn];


void solve() {
	
	int n, m;
	string s;
	
	cin >> n >> m >> s;
	
	vector<int> pref(n);
	for (int i = 0 ; i < m ; ++i) {
		int p;
		cin >> p;
		++pref[p - 1];
	}
	
	for (int i = n - 1 ; i > 0 ; --i) {
		pref[i - 1] += pref[i];
	}
	
	vector<int> ans(26);
	for (int i = 0 ; i < n ; ++i) {
		ans[s[i] - 'a'] += pref[i];
		++ans[s[i] - 'a'];
	}
	
	for (int i = 0 ; i < 26 ; ++i) {
		cout << ans[i] << " ";
	}
	
	cout << "\n";
	
	/*
	vector<int> vct(26, 0);
	int n, m;
	string str;
	
	cin >> n >> m >> str;
	for (int i = 0 ; i < m ; ++i) {
		cin >> arr[i];
	}
	
	unordered_map<char, int> curr;
	for (int i = 0 ; i < n ; ++i) {
		curr[str[i]]++;
		maps[i] = curr;
	}
	
	for (int i = 0 ; i < m ; ++i) {
		for (pair<char, int> pa : maps[arr[i] - 1]) {
			curr[pa.first] += pa.second;
		}
	}
	
	for (char i = 'a' ; i <= 'z' ; ++i) {
		cout << curr[i] << " ";
	}
	cout << "\n";
	
	*/
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