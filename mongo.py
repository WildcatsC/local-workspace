# Mongo authentication Ex

from pymongo import MongoClient 
import urllib.parse
import pprint


username = urllib.parse.quote_plus('metaplugRead')
password = urllib.parse.quote_plus('metaplugRead!@#')
client = MongoClient('mongodb://%s:%s@13.52.82.150:27017' % (username, password))

client_temp = MongoClient('localhost', 27017)
db = client_temp.test_database
#client.admin.command('copydb', fromdb='InstaDB',todb='db',fromhost='13.52.82.150:27017')

# try first 

post = {"a" : "A", "b" : "B", "z" : "Z"}
posts = db.posts
posts_id = posts.insert_one(post)

print(" === ")
print("print posts.find_one()")
pprint.pprint(posts.find_one())
print(" \n")
print("print db.list_collection_names)")
print(db.list_collection_names)

