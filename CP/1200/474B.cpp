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

const int nax = 1e5 + 1;
int arr[nax];
pair<int, int> pairs[nax];
int n, q;

void binarySearch(int num) {
	
	int l = 0, r = n, middle;
	
	while(l <= r) {
		
		middle = (l + r) / 2;
		
		if (num >= pairs[middle].first && num <= pairs[middle].second) {
			cout << middle + 1 << "\n";
			return;
		}
		if (num >= pairs[middle].second) {
			l = middle + 1;
		}
		else {
			r = middle - 1;
		}
	}
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	
	cin >> n;
	for (int i = 0 ; i < n ; ++i) {
		cin >> arr[i];
	}
	
	cin >> q;
	
	pairs[0].first = 1;
	pairs[0].second = arr[0];
	
	for (int i = 1 ; i < n ; ++i) {
		pairs[i].first = pairs[i - 1].second + 1;
		pairs[i].second = arr[i] + pairs[i - 1].second;
	}
	
	for (int i = 0 ; i < q ; ++i) {
		int aux;
		
		cin >> aux;
		binarySearch(aux);
	}

	
	return 0;
}