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
	
pair<int, string> pairs[100];
int n;

bool isIncluded(int fr, int check) {
	
	string f = pairs[fr].second, s = pairs[check].second;
	
	for (int i = 0, j = 0, start = 0; i < (int)s.size() ; ++i) {
		if (f[j] != s[i]) {
			j = -1;
			i = start;
			start++;
		}
		
		j++;
		if (j >= (int)f.size()) {
			return true;
		}
	}
	return false;
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	string str;
	
	cin >> n;
	for (int i = 0 ; i < n ; ++i) {
		cin >> str;
		pairs[i] = {(int)str.size(), str};
	}
	
	sort(pairs, pairs + n);
	
	for (int i = 1 ; i < n ; ++i) {
		if (!isIncluded(i - 1, i)) {
			cout << "NO\n";
			return 0;
		}
	}
	cout << "YES\n";
	for (int i = 0 ; i < n ; ++i) {
		cout << pairs[i].second << "\n";
	}

	return 0;
}