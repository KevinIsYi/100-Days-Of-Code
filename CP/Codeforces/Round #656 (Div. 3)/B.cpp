#include <bits/stdc++.h>
 
using namespace std;
 
int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int t, n, each;
	
	cin >> t;
	while(t--) {
		cin >> n;
		unordered_set<int> st;
		for (int i = 0 ; i < 2 * n ; ++i) {
			cin >> each;
			
			if (st.count(each)) {
				cout << each << " ";
			}
			st.insert(each);
		}
		cout << "\n";
	}
	
	return 0;
}