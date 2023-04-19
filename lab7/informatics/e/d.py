def election(x, y, z):
    if x == y or x == z:
        return x
    else:
        return y
    
data = input().split()
print(election(data[0], data[1], data[2]))