#include <bits/stdc++.h>

using namespace std;

#define all(x) x.begin(), x.end()
#define allr(x) x.rbegin(), x.rend()
#define pb(x) push_back(x)
#define mp(x, y) make_pair(x, y)

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

int isIncluded(string lng, string shrt) {
	
	int ans = 0;
	
	for (int i = 0 ; i < (int)lng.size() ; ++i) {
		int curr = 0;
		for (int j = i, k = 0 ; k < (int)shrt.size() && j < (int)lng.size() ; ++k, ++j, ++i) {
			if (lng[j] == shrt[k]) {
				++curr;
			}
			else {
				break;
			}
		}
		
		if (curr == (int)shrt.size()) {
			++ans;
		}
	}
	
	return ans;
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	string str;
	int n = 0;
	
	cin >> str;	
	
	n += isIncluded(str, "Danil");
	n += isIncluded(str, "Olya");
	n += isIncluded(str, "Slava");
	n += isIncluded(str, "Ann");
	n += isIncluded(str, "Nikita");
	
	if (n == 1) {
		cout << "YES\n";
	}
	else {
		cout << "NO\n";
	}
	
	return 0;
}