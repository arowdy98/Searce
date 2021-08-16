from scipy import optimize
import numpy as np

def batao(X,B,C):
	def func(A):
		one = np.array([[1],[1]])
		return np.array([X-np.dot(A,np.dot(B,C)),np.dot(A,one)-1],dtype = float);
	return func

def findA(X,B,C):
	return optimize.leastsq(batao(X,B,C),np.array([0,0]))

t = int(input())

for i in range(t):
	x = float(input())
	b = input().split()
	c = input().split()
	B = np.array([[float(b[0]),float(b[1])],[float(b[2]),float(b[3])]])
	C = np.array([float(c[0]),float(c[1])])
	A = findA(x, B, C)
	print("A:", A)
	print(np.dot(B,C))
	print("A*B*C=",np.dot(A,np.dot(B,C)))