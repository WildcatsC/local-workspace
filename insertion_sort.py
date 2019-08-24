#自己写一遍插入排序

def in_sort(x):
    for i in range(1,len(x)):
        key = x[i]
        j = i-1
        while x[j]>key and j>=0:
            x[j+1] = x[j]
            x[j] = key
            if j!=0:            #这一步在python可以直接不用，因为python中可以x[-1]不会out of bound
                j-=1
       
    sorted_x = x
    return sorted_x

print(in_sort([3,2,5,1]))