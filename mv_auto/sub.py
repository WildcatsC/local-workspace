import sys
import re 
import os 

file = 'part-00000-f2c53f88-565d-4488-a2f9-67e542cb3cb9-c000 (1)_0.csv'

f = open('/Users/stevenchan/Downloads/ID-AND/%s' % file, 'r')
fulltext = f.readlines()
f.close()

f = open('/Users/stevenchan/Downloads/ID-AND/%s' % file, 'w+')
i = 0
for line in fulltext:
    r = re.sub('\"', "", line)
    f.writelines(r)
    i = i+1
    if i % 500000 == 0:
        print(i)
f.close()