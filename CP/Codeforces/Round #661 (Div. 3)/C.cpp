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

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int t, n, curr;
	long long count;
	pair<int, int> mx;
	
	cin >> t;
	while(t--) {
		cin >> n;
		unordered_map<int, int> map;
		mx = {0, 0};
		
		for (int i = 0 ; i < n ; ++i) {
			cin >> curr;
			map[curr]++;
		}
		
		pair<int, int> pa(0, 0);
		
		for (int i = 2 ; i < 110 ; ++i) {
			count = 0;
			
			for (int j = 1 ; j < i ; ++j) {
				if (j > i - j) {
					break;
				}
				curr = min(map[j], map[i - j]);
				if (j == i - j) {
					curr = map[j] / 2;
				}
				count += curr;
			}
					
			mx = max(mx, {count, i});
		}
		cout << mx.first << "\n";
	}
	
	return 0;
}