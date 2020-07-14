#include <bits/stdc++.h>

using namespace std;

int can(int n) {

	for (int i = 5 ; i <= sqrt(n) ; ++i) {
		if (n % i == 0) {
			return i;
		}
	}
	return -1;
}
	

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int k, aux;
	char vowels[5] = {'a', 'e', 'i', 'o', 'u'};
	cin >> k;
	
	aux = can(k);
	
	if (k < 25 || aux == -1) {
		cout << "-1\n";
	}
	else {
		k = k / aux;
		
		for (int i = 0, control = 0 ; i < aux ; i++, control++) {
			for (int j = 0 ; j < k ; j++) {
				cout << vowels[control++ % 5];
			}
		}
	}

	return 0;
}