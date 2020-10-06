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

void solve() {
	
	int n, ans, curr;
	cin >> n;
	
	vector<int> vct(n);
	for (int & num : vct) {
		cin >> num;
	}
	
	sort(all(vct));
	
	ans = 0 ;
	curr = 0;
	
	for (int i = 0 ; i < n ; ++i) {
		if (++curr == vct[i]) {
			++ans;
			curr = 0;
		}
	}
	
	cout << ans << "\n";
	
	/*
	int n, each, count(0), extra, people;
	bool can;
	
	cin >> n;
	
	vector<int> vct;
	for (int i = 0 ; i < n ; ++i) {
		cin >> each;
		
		if (each == 1) {
			++count;
		}
		else {
			vct.push_back(each);
		}
	}
	
	sort(all(vct));
	extra = 0;
	
	for (int i = 0 ; i < (int)vct.size() ; ) {
		int k = 0;
		can = true;
		each = vct[i];
		
		while(i < (int)vct.size() && k < each && vct[i] == each) {
			++k;
			++i;
			
			if (extra + k >= each) {
				k = each;
				extra = 0;
			}
		}
		
		if (k == each) {
			++count;
		}
		else {
			extra += k;
		}
	}
	
	cout << count << "\n";
	*/
	
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