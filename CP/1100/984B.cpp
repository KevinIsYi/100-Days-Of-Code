#include <bits/stdc++.h>

using namespace std;

#define all(x) begin(x), end(x)
#define allr(x) rbegin(x), rend(x)

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

char matrix[102][102];
int n, m;

char solve(int rows, int col) {
	int ans(0);
	
	for (int i = max(1, rows - 1) ; i <= rows + 1 && i <= n ; ++i) {
		for (int j = max(1, col - 1) ; j <= col + 1 && j <= m ; j++) {
			if (matrix[i][j] == '*') {
				ans++;
			}
		}
	}
	
	if (ans == 0) {
		return '.';
	}
	return ans + 48;
}
	

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int curr;
	cin >> n >> m;
	for (int i = 1 ; i <= n ; ++i) {
		for (int j = 1 ; j <= m ; ++j) {
			cin >> matrix[i][j];
		}
	}
	
	for (int i = 1 ; i <= n ; ++i) {
		for (int j = 1 ; j <= m ; ++j) {
			if (matrix[i][j] != '*') {
				curr = solve(i, j);
			
				if (curr != matrix[i][j] && matrix[i][j] != '*') {
					cout << "NO\n";
					return 0;
				}
			}
		}
	}
	
	cout << "YES\n";
			
	
	return 0;
}