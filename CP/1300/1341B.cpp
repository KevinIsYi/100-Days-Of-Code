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

const int mxn = 2 * 1e5;
long long arr[mxn];

bool pick(int i, int l, int r) {
	if (i == l || i == r) {
		return false;
	}
	return arr[i - 1] < arr[i] && arr[i] > arr[i + 1];
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int t, n, k, ans, now, l, r;
	long long each;
	
	cin >> t;
	while(t--) {
		cin >> n >> k;
		ans = -1;
		now = 0;
		
		for (int i = 0 ; i < n ; ++i) {
			cin >> arr[i];
		}
		
		for (int i = 1 ; i + 1 < k ; ++i) {
			if (pick(i, 0, k - 1)) {
				++now;
			}
		}
		
		ans = now + 1;
		l = 0;
		r = k - 1;
		
		for (int i = k ; i < n ; ++i) {
			if (pick(i - k + 1, i - k, i - 1)) {
				--now;
			}
			if (pick(i - 1, i - k + 1, i)) {
				++now;
			}
			if (now + 1 > ans) {
				ans = now + 1;
				l = i - k + 1;
				r = i;
			}
		}
		cout << ans << " " << l + 1 << "\n";
	}
		
			
	
	return 0;
}