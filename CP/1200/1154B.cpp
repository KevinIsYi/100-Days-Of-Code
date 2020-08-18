#include <bits/stdc++.h>

using namespace std;

#define all(x) x.begin(), x.end()
#define allr(x) x.rbegin(), x.rend()
#define pb(x) push_back(x)
#define mp(x, y) make_pair(x, y);

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


int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	int n, curr;
	set<int> st;
	
	cin >> n;
	for (int i = 0 ; i < n ; ++i) {
		cin >> curr;
		
		st.insert(curr);
	}
	
	if (st.size() >= 4) {
		cout << "-1\n";
	}
	else {
		if (st.size() == 1) {
			cout << "0\n";
		}
		else {
			vector<int> vct;
			for (int num : st) {
				vct.pb(num);
			}
			
			if (vct.size() == 2) {
				int ans;
				if (vct[0] % 2 == vct[1] % 2) {
					ans = abs(vct[0] - vct[1]) / 2;
				}
				
				ans = min(ans, abs(vct[0] - vct[1]));
				cout << ans << "\n";
			}
			else {
				if (abs(vct[0] - vct[1]) == abs(vct[1] - vct[2])) {
					cout << abs(vct[0] - vct[1]) << "\n";
				}
				else {
					cout << "-1\n";
				}
			}
		}
	}	
	return 0;
}