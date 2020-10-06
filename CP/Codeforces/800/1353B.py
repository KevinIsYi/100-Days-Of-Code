t = int(input()) 

i = 0
while i < t:
    n, k = map(int, input().split())   

    a = list(sorted(map(int, input().split())))
    b = list(sorted(map(int, input().split())))

    j = 0
    x = 0
    z = n - 1
    
    while j < k:

        if a[x] < b[z]:
            aux = a[x]
            a[x] = b[z]
            b[z] = aux

        else:
            break

        x += 1
        z -= 1
        j += 1

    print(sum(a))

    i += 1
