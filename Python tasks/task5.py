from scipy import linalg
import numpy as np

def findA(X,B,C):
	return linalg.solve(np.dot(B,C).T, X).T

t = int(input())

for i in range(t):
	x = float(input())
	b = input().split()
	c = input().split()
	B = np.array([[float(b[0]),float(b[1])],[float(b[1]),float(b[2])]])
	C = np.array([float(c[0]),float(c[1])])
	A = findA(x, B, C)
	print(A)
	print(np.dot(A,np.dot(B,C)))