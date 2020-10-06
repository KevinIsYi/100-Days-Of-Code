#include <bits/stdc++.h>

using namespace std;

void print(vector<int> & vct) {
	
	for (int i = 0 ; i < 2 ; ++i) {
		cout << vct.back() << " ";
		vct.pop_back();
	}
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	
	int t, n, curr;
	
	cin >> t;
	while(t--) {
		cin >> n;
		vector<int> even, odd;
		
		for (int i = 0 ; i < 2 * n ; ++i) {
			cin >> curr;
			
			if (curr % 2 == 0) {
				even.push_back(i + 1);
			}
			else {
				odd.push_back(i + 1);
			}
		}
		
		while(--n) {
			if (odd.size() >= 2) {
				print(odd);
			}
			else if (even.size() >= 2) {
				print(even);
			}
			cout << "\n";
		}	
	}	
	
	return 0;
}