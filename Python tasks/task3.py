class IncreasingList():
	def __init__(self):
		self.arr = []

	def append(self, val):
		# if(len(self.arr) == 0):
		# 	self.arr.append(val)
		# 	return
		while(len(self.arr)>0 and self.arr[len(self.arr)-1] > val):
			self.arr.pop()
		self.arr.append(val)

	def pop(self):
		if(len(self.arr)):
			self.arr.pop()

	def __len__(self):
		return len(self.arr)

t = int(input())
a = IncreasingList()
for i in range(t):
	inst = input()
	if(inst == "size"):
		print(len(a))
	elif(inst == "pop"):
		a.pop()
	else:
		inst = inst.split()
		a.append(int(inst[1]))