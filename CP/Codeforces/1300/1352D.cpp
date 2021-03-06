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

const int mxn = 2 * 10e5;
int arr[mxn];


int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int t, n, moves, aPrev, bPrev, countA, countB;
	bool can;
	
	cin >> t;
	while(t--) {
		cin >> n;
		
		for (int i = 1 ; i <= n ; ++i) {
			cin >> arr[i];
		}
		
		countA = 0;
		bPrev = 0;
		countB = 0;
		moves = 0;
		can = true;
		
		
		int i = 1, j = n;
		
		while(i <= j) {
			if (moves % 2 == 0) {
				aPrev = 0;
				while(aPrev <= bPrev && i <= j) {
					aPrev += arr[i++];
				}
				countA += aPrev;
			}
			else {
				bPrev = 0;
				while(bPrev <= aPrev && j >= i) {
					bPrev += arr[j--];
				}
				countB += bPrev;
			}
			++moves;
		}
		cout << moves << " " << countA << " " << countB << "\n";
	}	
	
	return 0;
}