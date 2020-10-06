#include <bits/stdc++.h>

using namespace std;

#define all(x) x.begin(), x.end()
#define allr(x) x.rbegin(), x.rend()

template <typename T>
T ceil(T a, T b) {
	return (a + b - 1) / b;
}

template <typename T>
T GCD(T a, T b) {
	return b ? GCD(b, a % b) : a;
}

long long LCD(long long a, long long b) {
	if (a < b) {
		swap(a, b);
	}
	a /= GCD(a, b);
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

const int mxn = 2 * 1e5 + 1;
int arr[mxn];

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int t, n, j;
	
	cin >> t;
	while(t--) {
		cin >> n;
		vector<int> ans;
		for (int i = 1 ; i <= n ; ++i) {
			cin >> arr[i];	
		}
		
		for(int i = 1 ; i <= n ; ++i) {
			if (i == 1 || i == n || (arr[i - 1] < arr[i]) != (arr[i] < arr[i + 1])) {
				ans.push_back(arr[i]);
			}
			
			for (int number : ans) {
				cout << number << ", ";
			}
			cout << endl;
		}
		
		cout << ans.size() << "\n";
		for (int number : ans) {
			cout << number << " ";
		}
		cout << "\n";
	}
		
	
	return 0;
}