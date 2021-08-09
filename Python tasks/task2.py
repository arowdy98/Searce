def even(start,n):
	if start%2:
		return list(range(start+1,start+1+2*n, 2))
	else:
		return list(range(start, start + 2*n, 2))

all = input()
[a,b] = all.split()
a = int(a)
b = int(b)
print(even(a,b))