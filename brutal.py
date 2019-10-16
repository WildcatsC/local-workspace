#Horses cost $10, pigs cost $3, and rabbits are only $0.50. A farmer buys
#100 animals for $100, How many of each animal did he buy?

def b():
	
	horse = float(input("price of horses: "))
	rabit = float(input("price of rabbits: ")) 
	pig = float(input("price of pigs: "))
	total = float(input("total value: "))

	h = 0
	r = 0
	p = 0

	for h in range(int(total/horse)):
		for r in range(int(total/rabit)):
			for p in range(int(total/pig)):
				if h+r+p == 100 and  horse*h + pig*p + rabit*r == total:
					print(h,p,r)
