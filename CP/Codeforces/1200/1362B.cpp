#include <bits/stdc++.h>

using namespace std;

#define all(x) x.begin(), x.end()
#define allr(x) x.rbegin(), x.rend()
#define pb(x) push_back(x)

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

template <typename T>
bool isPrime(T n) {
	if (n <= 1) {
        return false; 
	}		
    if (n <= 3) {
        return true; 
	}
  
    if (n % 2 == 0 || n % 3 == 0) {
        return false; 
	}
  
    for (int i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) {
            return false; 
		}
	}
  
    return true; 
}


void solve() {
	int n, each;
	bool can;
	unordered_set<int> st;
	
	cin >> n;
	can = false;
	for (int i = 0 ; i < n ; ++i) {
		cin >> each;
		st.insert(each);
	}
	
	for (int i = 1 ; i <= 1024 ; ++i) {
		can = true;
		for (int num : st) {
			if (!st.count(num ^ i)) {
				can = false;
				break;
			}
		}
		if (can) {
			cout << i << "\n";
			return;
		}
	}
	
	cout << "-1\n";
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	
	int t;
	
	cin >> t;
	while(t--) {
		solve();
	}
	
	return 0;
}