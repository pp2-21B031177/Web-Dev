n = int(input())
a = input().split()
s = 0
for i in range(1, n):
    if int(a[i]) > int(a[i - 1]):
        s += 1
print(s)