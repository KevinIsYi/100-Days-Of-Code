#include <bits/stdc++.h>

using namespace std;

template <typename T>
T GCD(T a, T b) {
	return b ? GCD(b, a % b) : a;
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	return 0;
}