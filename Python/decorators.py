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