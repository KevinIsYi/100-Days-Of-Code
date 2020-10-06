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
	
	int n;
	
	cin >> n;
	vector<int> vct(n);
	
	for (int & val : vct) {
		cin >> val;
	}
	
	sort(all(vct));
	
	int ans = 0;
	
	vector<int> curr(n);
	for (int i = 0, j = 0, k = n - 1 ; i < n ; ++i) {
		if (i % 2 == 0) {
			curr[i] = vct[k];
			--k;
		}
		else {
			curr[i] = vct[j];
			++j;
		}
	}
	
	for (int i = 1 ; i < n - 1 ; i += 2) {
		++ans;
	}
	
	cout << ans << "\n";
	for (int val : curr) {
		cout << val << " ";
	}
	
	return 0;
}