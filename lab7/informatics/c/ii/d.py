import sys
a = int(input())
i = 1
while i <= a:
    if a == i:
        print("YES")
        sys.exit()
    i*=2
print("NO")