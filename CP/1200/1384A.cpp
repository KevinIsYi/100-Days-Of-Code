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

int arr[100];

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int t, n, k, mx;
	
	cin >> t;
	while(t--) {
		cin >> n;
		
		string str(100, 'a');
		cout << str << "\n";
		
		for (int i = 0 ; i < n ; ++i) {
			cin >> mx;
			
			str[mx] = (str[mx] == 'a') ? 'b' : 'a';
			
			cout << str << "\n";
		}
		
		
		/*
		string prev;
		mx = 0;
		k = 0;
		
		for (int i = 0 ; i < n ; ++i) {
			cin >> arr[i];
			mx = max(arr[i], mx);
		}
		
		for (int i = 0 ; i < mx  + 1; ++i) {
			prev.pb((i % 26) + 97);
		}
		
		cout << prev << "\n";
		
		for (int i = 0 ; i < n ; ++i) {
			if(prev[arr[i]] == (k % 26) + 97) {
				k++;
				k %= 26;
			}
			prev[arr[i]] = k + 97;
			cout << prev << "\n";
		}
		*/
	}
	
	return 0;
}