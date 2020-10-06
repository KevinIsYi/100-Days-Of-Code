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

int board[101];

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int n, even(0), odd(0);
	cin >> n;
	for (int i = 0 ; i < n / 2 ; ++i) {
		cin >> board[i];
	}
	sort(board, board + n / 2);
	
	for (int i = 0, control = 2 ; i < n / 2 ; ++i, control += 2) {
		even += abs(control - board[i]);
		odd += abs(control -1 - board[i]);
	}
	
	cout << min(even, odd) << "\n";
	return 0;
}