#include <bits/stdc++.h>

using namespace std;

#define all(x) x.begin(), x.end()
#define allr(x) x.rbegin(), x.rend()
#define pb(x) push_back(x)
#define mp(x, y) make_pair(x, y)

template <typename T>
T ceil(T a, T b) {
	return (a + b - 1) / b;
}

template <typename T>
T gcd(T a, T b) {
	return b ? gcd(b, a % b) : a;
}

long long lcd(long long a, long long b) {
	if (a < b) {
		swap(a, b);
	}
	a /= gcd(a, b);
	return a * b;
}	

/*
bool isContain(vector<int> container, vector<int> check) {

	for (int i = 0 ; i < 26 ; ++i) {
		if (container[i] < check[i]) {
			return false;
		}
	}
	return true;
}


int binarySearch(vector<vector<int>> & grid, vector<int> & vct) {
	int l = 0, r = n - 1, middle, ans;
	
	while(l <= r) {
		middle = (l + r) / 2;
		
		if (isContain(grid[middle], vct)) {
			ans = middle + 1;
			r = middle - 1;
		}
		else {
			l = middle + 1;
		}
	}
	return ans;
}
*/

int n, m;
vector<int> pos[26];
int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	string str;
	
	cin >> n >> str >> m;
	for (int i = 0 ; i < n ; ++i) {
		pos[str[i] - 'a'].pb(i + 1);
	}
	
	for (int i = 0 ; i < m ; ++i) {
		cin >> str;
		vector<int> vct(26);
		
		for (char chr : str) {
			vct[chr - 'a']++;
		}
		int ans = 0;
		
		for (int j = 0 ; j < 26 ; ++j) {
			if (vct[j] > 0) {
				ans = max(ans, pos[j][vct[j] - 1]);
			}
		}
		cout << ans	 << "\n";
		
	}
	/*
	cin >> n >> str >> m;
	vector<vector<int>> grid(n, vector<int>(26));
	
	for (int i = 0 ; i < n ; ++i) {
		
		if (i > 0) {
			grid[i] = grid[i - 1];
		}
		grid[i][str[i] - 'a']++;
	}
	
	for (int i = 0 ; i < m ; ++i) {
		cin >> str;
		
		vector<int> vct(26);
		for (char chr : str) {
			vct[chr - 'a']++;
		}
		
		cout << binarySearch(grid, vct) << "\n";
	}
	*/
	
	return 0;
}