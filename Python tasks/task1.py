def multiply(a,b,c):
    if(a*b <= c):
        print(a*b)
    else:
        print("Multiplication of {} by {} is out of bounds.".format(a,b))

n = int(input())
while(n):
    all = input()
    [a,b,c] = all.split()
    a = int(a)
    b = int(b)
    c = int(c)
    multiply(a,b,c)    
    n-=1