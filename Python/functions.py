def greet(name):
    print(f"Hello, {name}!")

greet("John")
# Output: Hello, John!

def add(x, y):
    return x + y

result = add(2, 3)
print(result)
# Output: 5

###### Keyword Arguments : 
def person(name, age, city):
    print(f"Name: {name}, Age: {age}, City: {city}")

person(name="John", age=30, city="New York")
# Output: Name: John, Age: 30, City: New York

###### Default Values : 
def greet(name, message="Hello"):
    print(f"{message}, {name}!")

greet("John")
# Output: Hello, John!
greet("Jane", message="Hi")
# Output: Hi, Jane!

###### Args and Kwargs  : 
def my_function(*args, **kwargs):
    print("Positional arguments:", args)
    print("Keyword arguments:", kwargs)

# Call the function with positional arguments
my_function(1, 2, 3)
# Call the function with keyword arguments
my_function(a=1, b=2, c=3)
# Call the function with a mix of positional and keyword arguments
my_function(1, 2, a=3, b=4)

###### Multiple Return Values  : 
def get_name_and_age(name, age):
    if age < 18:
        return "Minor", age
    else:
        return "Adult", age

minor, age = get_name_and_age("John", 17)
print(minor)  # Output: "Minor"
print(age)  # Output: 17

def square(number):
    return number ** 2

numbers = [1, 2, 3, 4, 5]
squared_numbers = map(square, numbers)
