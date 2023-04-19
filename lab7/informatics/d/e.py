n = int(input())
a = input().split()
b = False
for i in range(n - 1):
    if int(a[i]) * int(a[i + 1]) > 0:
        b = True
if b:
    print("YES")
else:
    print("NO")