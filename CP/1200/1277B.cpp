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

void solve() {
	
	int n, each, count(0);
	set<int> st;
	
	cin >> n;
	
	for (int i = 0 ; i < n ; ++i) {
		cin >> each;
		
		if (each % 2 == 0) {
			st.insert(each);
		}
	}
	
	while(!st.empty()) {
		int val = *st.rbegin();
		st.erase(val);
		
		++count;
		val /= 2;
		if (val % 2 == 0) {
			st.insert(val);
		}
	}
	
	cout << count << "\n";
		
	
	/*
	int n, each, count(0);
	
	map<int, int, greater<int>> mp;
	
	cin >> n;
	for (int i = 0 ; i < n ; ++i) {
		cin >> each;
		
		if (each % 2 == 0) {
			mp[each]++;
		}
	}
	
	
	for (pair<int, int> pa : mp) {
		each = pa.first;
		
		while(each % 2 == 0) {
			each /= 2;
			
			mp[each] += pa.second;
			
			++count;
			
			if (mp.count(each)) {
				break;
			}
			
		}

	}
	
	cout << count << "\n";
	
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