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

void print(vector<int> a, vector<int> b) {
	for (int val : a) {
		cout << val << " ";
	}
	for (int val : b) {
		cout << val << " ";
	}
}

void solve() {
	int n, mn = 0, mx = 0;
	vector<int> big, small;
	
	
	cin >> n;
	for (int i = 0 ; i < n ; ++i) {
		int aux;
		cin >> aux;
		
		if (aux >= 0) {
			big.pb(aux);
			mx += aux;
		}
		else if(aux < 0) {
			small.pb(aux);
			mn -= aux;
		}
	}
	
	
	if (mn == mx) {
		cout << "NO\n";
	}
	else {
		
		sort(allr(big));
		cout << "YES\n";
		if (mx > mn) {
			print(big, small);
		}
		else {
			print(small, big);
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