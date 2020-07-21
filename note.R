# Basic moves
x <- 1
y <- "1"
objects() # show 
rm(x) # remove 

class(y) # show object type
str(y) # show data str and value 

class(as.integer(y)) # integer

getwd()
# setwd()




# Basic structure
# vector  ????????????1????????????
v <- c(1:5)
u <- 1:5
class(v)==class(u) # ture

#rep seq
rep(x = 2, times = 1)
seq(from = 1, to = 2, by = 0.1)

n_names <- c("a", "b")
n <- c(1, 2)
names(n)<-n_names

# combine 2 types:
cb <- c(n_names, n)
class(cb)  # ????????????character ?????????????????????

# extract from vector by names
n["a"] # like the name of a column
       # ???????????????????????????????????????????????? comparison, logical statements, etc. 




# Statistics
s <- c(1,1,2,2,2,3,40,50,60)
length(s)
t <- table(s) # Table ???????????????????????????
max(t) # one method to get mode

library(statip)
mfv(s) # another method to get mode

mean(v) 
median(v)
max(v)
min(v)
diff(v) # ?????????????????? a vector
range(v) # a vector
var(v)
sd(v) # std deviation = sqrt(var(v))

quantile(s, 0.75) - quantile(s, 0.25)
breaks <- quantile(s, c(0,0.25,0.5,0.75,1))

sort(s, decreasing = TRUE)

# 5 Numbers
# min, qt0.25, median, qt0.75, max



# Dataset
data(state)
rm(list = c("state.abb")) # list =   ???rm???????????????

is.vector(state.abb)
which.max(state.area) # return index

# diagrams
hist(state.area, col = "lightblue", xlab = "Area of States" , main = "This is the title", breaks = c(1,2,max(state.area)))
?hist

s <- c(10,22,33,44,45,67,55,52,88,19,10,10,10,10)
stem(x = s, scale = 2) # scale controls the plot length 

boxplot(s) # 5 numbers 
barplot(s) # bar: value  vs  hist: frequency
pie(s)


# Matrix 

rbind(v,v) # ????????????row?????????
cbind(v,v)

ele <- v*v # elementwise

mul <- v %*% t(v)
mul <- t(v)%*%v # vector multiplication (matrix??????)
mul <- v*v #?????????

A <- matrix(data = 1:6, nrow = 3, ncol = 4, byrow = TRUE) # ??????
B <- matrix(data = 1:5, 3, 4) # ?????????

# Array 

arr <- array(data = 1:2, dim = c(4,4,2))  #??????recycle
arr
?apply # ??????apply function???return margins of an array or matrix  ???row???col?????????
apply(arr, 1, sum)  # 1 == rows, 2 == col, c(1,2)==row&col 
apply(arr, 2, mean)  

v <- c(1,0,5,6,7)
k <- c(2,3,4,5,6)
v<k # a vector of T/F
any(v<k)
all(v<k)

#### T\F == 1\0

# Factor 
x_val <- c("3","1","1","2","3","3", "100")
f <- factor(x_val) # ???unique???
y_val <- c("1", "2", "3")
f <-factor(x_val, levels = y_val, ordered = T) # order check levels sortl
length(f)

?factor  

uni <- runif(10, min = 0, max = 5) #uniform distribution
round(uni) # ????????????

brk <- c(0,1,2,3,4,5)
# lab <- c("o", "tw", "th", "fo", "fi")
cut(x = uni, breaks = brk, right = T, include.lowest = T, labels = NULL) # bin the data   right open or not


# List 
# can contain any structure, any size
?list
l <- list(c(1,2,3), matrix(data = 1:12, 3, 4), c(T, F))
l[[3]] # ???????????? T/F
l[[2]][1,2] # ????????????????????????

length(l) # ??????

cat(l[[2]], 100:103) # print, ???????????????

names(l) <- c("one", "two", "TF")

l$one # like data frame, extract one layer
l$two[,4][c(1,3)]


# Dataframe  
df <- data.frame("a" = c("a", "A"), "num"=c(1,2), "T" = c(T, F))
df$a[2]
df[1,2] # same

df["a"] # extract

nrow(df)
ncol(df)

# Tibble 

