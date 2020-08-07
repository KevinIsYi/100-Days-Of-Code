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

int grid[300][300], n, m;

bool check() {
	if (grid[0][0] > 2 || grid[0][m - 1] > 2 || grid[n - 1][0] > 2 || grid[n - 1][m - 1] > 2) {
		return false;
	}
	
	for (int i = 0 ; i < n ; ++i) {
		for (int j = 0 ; j < m ; ++j) {
			if (grid[i][j] > 3) {
				if (grid[i][j] > 4 || i == 0 || i == n - 1 || j == 0 || j == m - 1) {
					return false;
				}
			}
		}
	}
	return true;
}
	

void ans() {
	
	for (int i = 0 ; i < n ; ++i) {
		for (int j = 0 ; j < m ; ++j) {
			if ((i == 0 && j == 0) || (i == n - 1 && j == 0) || (i == 0 && j == m - 1) || (i == n - 1 && j == m - 1)) {
				cout << "2 ";
			}
			else if (i == 0 || i == n -1 || j == 0 || j == m - 1) {
				cout << "3 ";
			}
			else {
				cout << "4 ";
			}
		}
		cout << "\n";
	}
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int t;
	
	cin >> t;
	while(t--) {
		cin >> n >> m;
		
		for (int i = 0 ; i < n ; ++i) {
			for (int j = 0 ; j < m ; ++j) {
				cin >> grid[i][j];
			}
		}
		
		if (!check()) {
			cout << "NO\n";
			continue;
		}
		else {
			cout << "YES\n";
			ans();
		}
	}
	
	
	return 0;
}