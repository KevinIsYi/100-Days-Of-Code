#include <bits/stdc++.h>

using namespace std;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int t, one, zero;
	char bin[2] = {'0', '1'};
	string str;
	
	cin >> t;
	while(t--) {
		cin >> str;
		
		one = 0;
		zero = 0;
		
		for (char chr : str) {
			if (chr == '1') {
				one++;
			}
			else {
				zero++;
			}
		}
			
		if (one == str.size() || zero == str.size() || str.size() == 2) {
			cout << str;
		}
		else {
			for (int i = 0 ; i < (int) str.size() * 2 ; i++) {
				cout << bin[i % 2];
			}
		}
		cout << "\n";
	}
	
	return 0;
}