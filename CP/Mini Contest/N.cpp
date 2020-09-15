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

void binarySearch(long long len, long long k, long long curr) {
	
	long long l = 1, r = len, mid;
	
	
	while(l <= r) {
		mid = (l + r) / 2;
		if (k == mid) {
			cout << curr << "\n";
			return;
		}
		if (k > mid) {
			l = mid + 1;
		}
		else {
			r = mid - 1;
		}
		
		--curr;
	}
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int n;
	long long k;
	
	cin >> n >> k;
	
	if (k % 2 == 1) {
		cout << "1\n";
	}
	else {
		long long len = 1;
		int i;
		for (i = 1 ; i < n ; ++i);
		
		len <<= i;
		
		binarySearch(--len, k, n);
	}
		
	
	return 0;
}