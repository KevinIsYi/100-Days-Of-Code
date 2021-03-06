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

template < class c > struct rge { c b, e; };
template < class c > rge<c> range(c i, c j) { return rge<c>{i, j}; }
template < class c > auto dud(c* x) -> decltype(cerr << *x, 0);
template < class c > char dud(...);

struct debug {
	~debug() { cerr << endl; }
	
	template < class c > typename \
	enable_if<sizeof dud<c>(0) != 1, debug&>::type operator<<(c i) {
		cerr << boolalpha << i;
		return * this;
	}
	
	template < class c > typename \
	enable_if<sizeof dud<c>(0) == 1, debug&>::type operator<<(c i) {
		return * this << range(begin(i), end(i)); 
	}
	
	template < class c, class b > debug & operator << (pair < b, c > d) {
		return * this << "(" << d.first << ", " << d.second << ")";
	}
	
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



using namespace std;

int const MAXN = 1e5 + 5;
int cnt[MAXN];

int main() {
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    
    int n, q, x, cnt2 = 0, cnt4 = 0;
    char type;
    cin >> n;

    for (int i = 1; i <= n; ++i) {
        cin >> x;
        
        cnt2 -= cnt[x] / 2;
        cnt4 -= cnt[x] / 4;
        cnt[x]++;
        cnt2 += cnt[x] / 2;
        cnt4 += cnt[x] / 4;
        
        debug() << imie(cnt2) imie(cnt4);
    }

    cin >> q;


	cout << "Segundo\n";
    for (int i = 1; i <= q; ++i) {
        cin >> type >> x;
        cnt2 -= cnt[x] / 2;
        cnt4 -= cnt[x] / 4;
        
        if (type == '+') cnt[x]++;
        else cnt[x]--;
        
        cnt2 += cnt[x] / 2;
        cnt4 += cnt[x] / 4;
        
        debug() << imie(cnt2) imie(cnt4);
        
        if (cnt4 >= 1 && cnt2 >= 4) cout << "YES" << '\n';
        else cout << "NO" << '\n';
    }
    
    return 0;
}
