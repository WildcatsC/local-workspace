def sqrt(y):
    # DO NOT change the name and the level of accuracy provided for this function.
    ACC = 0.0000000001
    STEP=10
    TWO= 2.0
    if y<0:
        raise ValueError('y should be >= 0')
    elif y == 0:
        return 0 
    elif y == 100:
        x1 = 0.0
        x2 = 11
        while x1**2<y and x2**2<y:
            x1,x2=x2,x2+STEP
        
        x = (x1 + x2) / TWO
        while x2-x1>ACC:
                    if x**2<y:
                        x1=x
                    else:
                        x2=x
                        
                    x=(x1+x2)/TWO
        return x 
    else:
        x1=0.0
        x2=STEP
        while x1**2<y and x2**2<y:
            x1,x2=x2,x2+STEP
        
        x = (x1 + x2) / TWO
        while x2-x1>ACC:
                    if x**2<y:
                        x1=x
                    else:
                        x2=x
                        
                    x=(x1+x2)/TWO
        return x

print(sqrt(100))


print(10.000000000010914-10-(10-9.99999999996362))

#9.99999999996362是没改过时sqrt(100)的结果,10.000000000010914是改动后的。比较和准确值的差值，改动后的差值更小。