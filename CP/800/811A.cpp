#include <bits/stdc++.h>

using namespace std;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int a, b, control(1);
	bool can(true);
	
	cin >> a >> b;
	while(can) {
		can = false;
		
		a -= control++;
		b -= control++;
		
		if (a < 0) {
			cout << "Vladik\n";
		}
		else if (b < 0) {
			cout << "Valera\n";
		}
		else {
			can = true;
		}
	}
	
	
	return 0;
}