#include <bits/stdc++.h>

using namespace std;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);
	
	long long n, x, y;
	int count(0);
	string str;
	
	cin >> n >> x >> y >> str;

	for (int i = (int)str.size() - 1 ; x > 0 ; i--, x--, y--) {
		if (y == 0) {
			if (str[i] != '1') {
				count++;
			}
		}
		else if(str[i] != '0') {
			count++;
		}
	}
	
	cout << count << "\n";
	
	return 0;
}