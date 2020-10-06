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


const int mxn = 1e5 + 1;
int arr[mxn];
int n, q;

void binarySearch(int pos) {
	
	int l = 0, r = n - 1, middle;
	
	while(l <= r) {
		middle = (l + r) / 2;
		
		if (arr[middle] <= pos) {
			l = middle + 1;
		}
		else {
			r = middle - 1;
		}
	}
	
	cout << l << "\n";
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	cin >> n;
	for (int i = 0 ; i < n ; ++i) {
		cin >> arr[i];
	}
	
	sort(arr, arr + n);
	
	cin >> q;
	for (int i = 0 ; i < q ; ++i) {
		int aux;
		
		cin >> aux;
		binarySearch(aux);
	}
	
	return 0;
}