class Duck:
	def help(self):
		print('quaak!')

class Person:
	def help(self):
		print('help!')

def forest(x):
	x.help()     #灵活选择参数类型

forest(Duck())
forest(Person())

test = Person()
test.help()

#一个类的方法在运行时可以被替换 
class Order:
	def save(self):
		print('save order')

old_save = Order.save  #直接存函数
print(old_save)
def save_with_logging(self):
	print('logging start')
	old_save(self)
	print('logging end')

Order.save = save_with_logging

t = Order()
t.save()   
print(t)





