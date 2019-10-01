'''
Write a recursive function num_sevens that takes a positive integer n and returns the number of times the digit 7 appears in n.
Use recursion - the tests will fail if you use any assignment statements.
'''

def num_sevens(n):
	if n % 10 == 7:
		return 1 + num_sevens(n//10)
	elif n % 10 != 7 and n > 10:
		return num_sevens(n//10)
	else:
		return 0

def fast_sevens(n):
	l = [123]    # empty a list ***
	l[:] = []
	print(str(n))
	for i in range(len(str(n))):
		l.append(str(n)[i])
	count = 0
	print(l)
	for j in range(len(l)):
		if l[j] == "7":
			print(l[i])
			count += 1
	return count 


