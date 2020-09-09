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

int f[10];
string s;

int main()
{
	int n;
	cin >> n;
	cin >> s;
	for(int i = 1; i <= 9; i++)
		cin >> f[i];
	vector<int> diff;
	for(int i = 0; i < n; i++)
		diff.push_back(f[s[i] - '0'] - (s[i] - '0'));
	for(int i = 0; i < n; i++)
		if(diff[i] > 0)
		{
			while(i < n && diff[i] >= 0)
			{
				s[i] = char(f[s[i] - '0'] + '0');
				i++;
			}
			break;
		}
	cout << s << endl;
}