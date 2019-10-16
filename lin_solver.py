import numpy as np 

'''
用于解决线性方程组
输入column
square matrix ONLY 


Solve the system of equations 3 * x0 + x1 = 9 and x0 + 2 * x1 = 8:


 a = np.array([[3,1], [1,2]])
 b = np.array([9,8])
 x = np.linalg.solve(a, b)

>>> x
array([ 2.,  3.])

	解不出singular
	而且这一坨代码非常不python

'''

def linear_solver():

	print("matrix like this kind:\n")
	print(" a11*X1 + a12*X2 + ... + a1n*Xn = b1 \n a21*X1 + ...      ... + a2n*Xn = b2 \n . \n . \n . \n an1*X1 + ...      ... + ann*Xn = bn ")
	
	SIZE = int(input("size(n) of the matrix(n*n):\n"))

	if(SIZE >= 2):

		matrix = np.zeros((SIZE,SIZE), dtype = float)
		bias = np.zeros((SIZE), dtype = float)

		print("row by row\ninput a:")

		for i in range(SIZE):
			for j in range(SIZE):
				matrix[i][j] = float(input())

		print("input b:")
		for i in range(SIZE):
			bias[i] = float(input())

		result = np.linalg.solve(matrix,bias)

		print(result)

	else:
		print("size must >= 2 \n")

linear_solver()












