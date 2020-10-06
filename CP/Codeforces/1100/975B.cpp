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

long long arr[14];
long long aux[14];

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	long long curr, currAns, ans(0);
	
	for (int i = 0 ; i < 14 ; ++i) {
		cin >> arr[i];
	}
	
	for (int i = 0 ; i < 14 ; ++i) {
		curr = arr[i] % 14;
		currAns = 0;
		
		for (int j = 0 ; j < 14 ; ++j) {
			aux[j] = (arr[j] + (arr[i] / 14));
		}
		
		aux[i] = arr[i] / 14;
		for (int j = i + 1, k = 0 ; k < curr ; ++k, ++j) {
			if (j == 14) {
				j = 0;
			}
			aux[j]++;
		}
		
		for (int j = 0 ; j < 14 ; ++j) {
			if (aux[j] % 2 == 0) {
				currAns += aux[j];
			}
		}
		
		
		ans = max(ans, currAns);
	}
		
	
	cout << ans << "\n";
	
	return 0;
}