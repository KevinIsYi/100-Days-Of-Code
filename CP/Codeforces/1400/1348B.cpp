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


const int NAX = 1e4 + 1;
int arr[NAX];

void solve() {
	int n, k;
	set<int> st;
	
	cin >> n >> k;
	
	for (int i = 0 ; i < n ; ++i) {
		int a;
		cin >> a;
		st.insert(a);
	}
	
	if ((int)st.size() > k) {
		cout << "-1\n";
	}
	else {
		cout << n * k << "\n";
		
		for (int i = 0 ; i < n ; ++i) {
			for (int val : st) {
				cout << val << " ";
			}
			for (int j = 0 ; j < k - (int)st.size() ; ++j) {
				cout << "1 ";
			}
		}
		
		cout << "\n";
			
	}
	
	
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