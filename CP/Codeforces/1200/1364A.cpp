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

const int len = 10e5;
int arr[len];

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int t, n, x, count, each;
	long long sum;
	
	cin >> t;
	while(t--) {
		cin >> n >> x;
		
		count = 0;
		sum = 0;
		
		for (int i = 0 ; i < n ; ++i) {
			cin >> arr[i];
			
			sum += arr[i];
			if (arr[i] % x == 0) {
				count++;
			}
		}
		
		if (sum % x == 0) {
			if (count == n) {
				cout << "-1\n";
			}
			else {
				int f = -1, s = -1;
				
				for (int i = 0, j = n - 1 ; i < n ; ++i, --j) {
					if (arr[i] % x != 0 && f == -1) {
						f = i + 1;
					}
					if (arr[j] % x != 0 && s == -1) {
						s = j;
					}
				}
				cout << max(n - f, s) << "\n";
			}
		}
		else {
			cout << n << "\n";
		}
		
	}
		
	
	return 0;
}