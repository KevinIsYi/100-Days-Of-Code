#include <bits/stdc++.h>

using namespace std;

#define all(x) begin(x), end(x)
#define allr(x) rbegin(x), rend(x)

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

bool isIncluded(string toFind, string check) {
	
	if (toFind.size() > check.size()) {
		return false;
	}
	
	reverse(all(toFind));
	reverse(all(check));
	
	for (int i = 0 ; i < (int)toFind.size() ; ++i) {
		if (toFind[i] != check[i]) {
			return false;
		}
	}
	return true;
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int n, each;
	string name, number;
	unordered_map<string, unordered_set<string>> map;
	
	cin >> n;
	while(n--) {
		cin >> name >> each;
		
		while(each--) {
			cin >> number;
			
			map[name].insert(number);
		}
	}
	
	cout << map.size() << "\n";
	for (pair<string, unordered_set<string>> pa : map) {
		unordered_set<string> curr;
		bool isInWord;
		
		for (string s : pa.second) {
			isInWord = false;
			for (string s2 : pa.second) {
				if (s != s2 && isIncluded(s, s2)) {
					isInWord = true;
				}
			}
			if (!isInWord) {
				curr.insert(s);
			}
		}
		cout << pa.first << " " << curr.size() << " ";
		for (string s : curr) {
			cout << s << " ";
		}
		cout << "\n";
	}
	
	return 0;
}