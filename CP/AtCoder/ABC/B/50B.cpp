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
	
	int n, m;
	long long sum = 0;
	cin >> n;
	
	vector<int> vct(n);
	for (int & val : vct) {
		cin >> val;
		sum += val;
	}
	
	cin >> m;
	for (int q = 0 ; q < m ; ++q) {
		int f, s;
		cin >> f >> s;
		
		int curr = (sum - vct[f - 1]);
		curr += s;
		
		cout << curr << "\n";
	}
	
	
	return 0;
}