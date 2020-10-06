#include <bits/stdc++.h>

using namespace std;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int n, each, control(0), count(0);
	
	cin >> n;
	for (int i = 0 ; i < n ; ++i) {
		cin >> each;
		
		control += each;
		
		if (control < 0) {
			count++;
			control = 0;
		}
	}
	
	cout << count << "\n";
	
	return 0;
}