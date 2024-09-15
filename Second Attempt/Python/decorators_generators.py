#### Simple Decorator : 
def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()  # Output:
              # Something is happening before the function is called.
              # Hello!
              # Something is happening after the function is called.

##### Decorator : 
def repeat(n):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for i in range(n):
                func(*args, **kwargs)
        return wrapper
    return decorator

@repeat(3)
def say_hello(name):
    print(f"Hello, {name}!")

say_hello("Alice")  # Output:
                     # Hello, Alice!
                     # Hello, Alice!
                     # Hello, Alice!

##### Generator : 
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