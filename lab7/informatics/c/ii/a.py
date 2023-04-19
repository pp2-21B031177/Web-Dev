import math
a = int(input())
i = 1
while i <= a:
    if int(math.sqrt(i)) ** 2 == i:
        print(i, end=' ')
    i += 1