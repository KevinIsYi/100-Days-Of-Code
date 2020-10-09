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
	
	int n, each, ans = 0;
	cin >> n;
	vector<int> vct(n);
	
	for (int & val : vct) {
		cin >> val;
	}
	
	sort(all(vct));
	
	for (int i = 0 ; i < n ; ++i) {
		cout << "\nvct[i]: " << vct[i] << endl;
		for (int j = 0 ; j < i ; ++j) {
			cout << "vct[j]: " << vct[j] << endl;
			for (int k = 0 ; k < j ; ++k) {
				cout << "vct[k]: " << vct[k] << endl;
				if (vct[k] != vct[j] && vct[j] != vct[i]) {
					ans += (vct[k] + vct[j] > vct[i]);
				}
			}
		}
	}
	
	
	cout << ans << "\n";
	
	
	return 0;
}