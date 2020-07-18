#include <bits/stdc++.h>

using namespace std;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int t, n, pos;
	cin >> t;
	while(t--) {
		cin >> n;
		
		vector<int> vct(n);
		for (int & numb : vct) {
			cin >> numb;
		}
		
		pos = n - 1;
		while(pos > 0 && vct[pos - 1] >= vct[pos]) { 
			pos--;
		}
		
		while(pos > 0 && vct[pos - 1] <= vct[pos]) {
			pos--;
		}
		
		cout << pos << "\n";
	}
	
	
	return 0;
}