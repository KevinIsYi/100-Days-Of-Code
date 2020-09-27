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


const int maxn = 500;
char grid[maxn][maxn];
int h, w;

void changeVals(int row, int col) {
	
	grid[row][col] = '.';
	
	for (int i = row - 1 ; i >= 0 && grid[i][col] == '*'; --i) {
		grid[i][col] = '.';
	}
	
	for (int i = row + 1 ; i < h && grid[i][col] == '*' ; ++i) {
		grid[i][col]= '.';
	}
	
	for (int j = col - 1 ; j >= 0 && grid[row][j] == '*' ; --j) {
		grid[row][j] = '.';
	}
	for (int j = col + 1; j < w && grid[row][j] == '*' ; ++j) {
		grid[row][j] = '.';
	}
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	bool can = false;
	
	cin >> h >> w;
	for (int i = 0 ; i < h ; ++i) {
		cin >> grid[i];
	}
	
	for (int i = 1 ; i < h - 1 && !can ; ++i) {
		for (int j = 1 ; j < w - 1; ++j) {
			
			if (grid[i][j] == '*' && 
				grid[i - 1][j] == '*' && 
				grid[i + 1][j] == '*' && 
				grid[i][j - 1] == '*' && 
				grid[i][j + 1] == '*') {
					
				can = true;
				changeVals(i, j);
				break;
			}
			
		}
	}
	
	if (can) {		
		for (int i = 0 ; i < h ; ++i) {
			for (int j = 0 ; j < w ; ++j) {
				if (grid[i][j] == '*') {
					cout << "NO\n";
					return 0;
				}
			}
		}
		cout << "YES\n";
	}
	
	else {
		cout << "NO\n";
	}
	
	return 0;
}