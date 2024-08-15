##### Simple Example : 
def infinite_sequence():
    num = 0
    while True:
        yield num
        num += 1

seq = infinite_sequence()
print(next(seq))  # prints 0
print(next(seq))  # prints 1
print(next(seq))  # prints 2

##### Iterate over : 
def my_generator():
    for i in range(5):
        yield i

for value in my_generator():
    print(value)