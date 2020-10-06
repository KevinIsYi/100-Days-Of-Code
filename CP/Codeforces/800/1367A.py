def main():
    t = int(input())

    for i in range(t):
        string = input()
        ans = ""

        i = 0
        while(i < len(string)):
            ans += string[i]

            i += 2

        if (len(string) % 2 == 0):
            ans += string[-1]

        print(ans)


main()
