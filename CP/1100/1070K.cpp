#include <bits/stdc++.h>

using namespace std;

const int MAX = 10e5 + 1;

int arr[MAX], ans[MAX];

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int n, k;
	long long sum(0), each;
	
	cin >> n >> k;
	for (int i = 0 ; i < n ; ++i) {
		cin >> arr[i];
		sum += arr[i];
	}
	
	each = sum / k;
	
	if (each * k != sum) {
		cout << "No\n";
		return 0;
	}
	
	for (int i = 0, j = 0, z = 0, count ; i < k ; ++i, ++z) {
		sum = 0;
		count = 0;
		while(sum < each) {
			sum += arr[j];
			j++;
			count++;
		}
		
		if (sum != each) {
			cout << "No\n";
			return 0;
		}
		ans[z] = count;
	}
	
	cout  << "Yes\n";
	for (int i = 0 ; i < k ; ++i) {
		cout << ans[i] << " ";
	}
		
	
	return 0;
}