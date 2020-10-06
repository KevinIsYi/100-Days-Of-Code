#include <bits/stdc++.h>

using namespace std;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	long long count(1), n;
	unordered_set<long long> st;
	
	cin >> n;
	
	while(!st.count(n)) {
		st.insert(n);
		n++;
		while(n % 10 == 0) {
			n /= 10;
		}
	}
	
	cout << st.size() << "\n";
	
	
	return 0;
}