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
	
	cin >> n >> m;
	vector<int> vct(n + 1);
	
	for (int i = 1 ; i <= n ; ++i) {
		cin >> vct[i];
	}
	
	sort(all(vct));
	
	for (int i = 1 ; i <= n ; ++i) {
		int j = 0, aux = i, curr = 0, control = 1;
		
		while(j < i) {
			for (int z = aux, k = 0 ; z >= 1 && k < m ; --z, ++k, ++j, --aux) {
				curr += (vct[z] * control);
			}
			++control;
		}
		
		cout << curr << " ";
	}
		
	
	return 0;
}