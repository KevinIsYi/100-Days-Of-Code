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

bool check(string a, string b, string c) {
    if (a == b && b == c) {
		return true;
	}
    if (a > b) {
		swap(a, b);
	}
    if (b > c) {
		swap(b, c);
	}
    if (a > b) {
		swap(a, b);
	}
    if (a[1] == b[1] && b[1] == c[1]) {
        if (a[0] + 1 == b[0] && b[0] + 1 == c[0]) {
            return true;
		}
    }
    return false;
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	string a, b, c;
    cin >> a >> b >> c;
    if (check(a, b, c))
    {
        cout << "0";
        return 0;
    }
    vector<string> var;
    for (int i = 1; i <= 9; i++)
    {
        string s = "";
        s += (char)(i + '0');
        var.push_back(s + "m");
        var.push_back(s + "p");
        var.push_back(s + "s");
    }
    for (string s : var)
    {
        if (check(s, a, b))
        {
            cout << "1";
            return 0;
        }
        if (check(s, a, c))
        {
            cout << "1";
            return 0;
        }
        if (check(s, b, c))
        {
            cout << "1";
            return 0;
        }
    }
    cout << "2";
	
	return 0;
}