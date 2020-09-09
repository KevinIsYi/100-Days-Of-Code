#include "bits/stdc++.h"
using namespace std;

#define all(x) x.begin(), x.end()
#define allr(x) x.rbegin(), x.rend()
#define pb(x) push_back(x)

#define sim template < class c
#define ris return * this
#define dor > debug & operator <<
#define eni(x) sim > typename \
  enable_if<sizeof dud<c>(0) x 1, debug&>::type operator<<(c i) {

/*sim > struct rge { c b, e; };
sim > rge<c> range(c i, c j) { return rge<c>{i, j}; }
sim > auto dud(c* x) -> decltype(cerr << *x, 0);
sim > char dud(...);*/

template < class c > struct rge { c b, e; };
template < class c > rge<c> range(c i, c j) { return rge<c>{i, j}; }
template < class c > auto dud(c* x) -> decltype(cerr << *x, 0);
template < class c > char dud(...);

struct debug {
	~debug() { cerr << endl; }
	
	//eni(!=) cerr << boolalpha << i; ris; }        Part 1
	
	template < class c > typename \
	enable_if<sizeof dud<c>(0) != 1, debug&>::type operator<<(c i) {
		cerr << boolalpha << i;
		return * this;
	}
	
	//eni(==) ris << range(begin(i), end(i)); }     Part 2
	
	template < class c > typename \
	enable_if<sizeof dud<c>(0) == 1, debug&>::type operator<<(c i) {
		return * this << range(begin(i), end(i)); 
	}
	
	/*sim, class b dor(pair < b, c > d) {           Part 3
		ris << "(" << d.first << ", " << d.second << ")";
	}*/
	
	template < class c, class b > debug & operator << (pair < b, c > d) {
		return * this << "(" << d.first << ", " << d.second << ")";
	}
	
	/*sim dor(rge<c> d) {                           Part 4
		*this << "[";
		for (auto it = d.b; it != d.e; ++it)
			*this << ", " + 2 * (it == d.b) << *it;
		ris << "]";
	}*/
	
	template < class c > debug & operator <<(rge<c> d) {
		*this << "[";
		for (auto it = d.b; it != d.e; ++it)
			*this << ", " + 2 * (it == d.b) << *it;
		return * this << "]";
	}
	
};
#define imie(...) " [" << #__VA_ARGS__ ": " << (__VA_ARGS__) << "] "


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

bool isSubstring(string a, string b) {
	
	
	if (a.size() > b.size()) {
		return false;
	}

	for (int i = 0, j = 0 ; i < (int)b.size() ; ++i) {
		if (a[j] == b[i]) {
			++j;
		}
		if (j == (int)a.size()) {
			return true;
		}
	}
	return false;
	
}

void solve() {
	
	string s, t, p;
	bool can = true;
	
	cin >> s >> t >> p;
	
	if (!isSubstring(s, t)) {
		cout << "NO\n";
		return;
	}
	
	map<char, int> charsT;
	for (char chr : t) {
		charsT[chr]++;
	}
	
	for (char chr : s) {
		if (!charsT.count(chr)) {
			can = false;
			break;
		}
		charsT[chr]--;
		
		if (charsT[chr] < 0) {
			can = false;
			break;
		}
	}
	
	for (char chr : p) {
		if (charsT.count(chr) && charsT[chr] > 0) {
			charsT[chr]--;
		}
	}
	
	for (pair<char, int> pa : charsT) {
		if (pa.second > 0) {
			can = false;
			break;
		}
	}
	
	if (can) {
		cout << "YES\n";
	}
	else {
		cout << "NO\n";
	}
	
	
	
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
