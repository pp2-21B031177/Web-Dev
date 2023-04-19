def min(a, b, c, d):
    if a <= b and a <= c and a <= d:
        return a
    elif b <= a and b <= c and b <= d:
        return b
    elif c <= a and c <= b and c <= d:
        return c
    return d
a = input().split()
print(min(int(a[0]), int(a[1]), int(a[2]), int(a[3])))