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

int arr[180];

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int n, curr, currB;
	unordered_set<int> st;
	bool can = false;
	
	cin >> n;
	
	for (int i = 0 ; i < n ; ++i) {
		cin >> arr[i];
	}
	
	st.insert(arr[0]);
	
	for (int i = 1 ; i < n ; ++i) {
		unordered_set<int> newOne;	
		
		for (int val : st) {
			for (int j = 0 ; j < 2 ; ++j) {
				curr = (j % 2 == 0 ? 1 : -1);
				
				curr *= arr[i];
				newOne.insert(curr + val);
			}
		}
		st = newOne;
	}
		
	
	for (int val : st) {
		if (val == 0 || val % 360 == 0) {
			cout << "YES\n";
			return 0;
		}
	
	}
	cout << "NO\n";
		
	
	return 0;
}