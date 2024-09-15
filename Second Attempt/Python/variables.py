# Variable Assignment
x = 10           # Assigning an integer
y = 3.14         # Assigning a float
name = "Alice"   # Assigning a string
is_student = True  # Assigning a boolean

print(x, y, name, is_student)  # Output: 10 3.14 Alice True

# Variable Naming Rules:
# - Must start with a letter (a-z, A-Z) or underscore (_)
# - Can contain letters, digits (0-9), and underscores
# - Case-sensitive (myVar and myvar are different)
# - Cannot use reserved keywords (e.g., if, for, while)

# Examples of valid variable names:
my_var = 1
_my_var = 2
myVar123 = 3

# Examples of invalid variable names:
# 2myvar = 4     # SyntaxError
# my-var = 5     # SyntaxError
# my var = 6     # SyntaxError

# Data Types

# Integer
a = 5
print(type(a))   # Output: <class 'int'>

# Float
b = 2.5
print(type(b))   # Output: <class 'float'>

# Complex
c = 1 + 2j
print(type(c))   # Output: <class 'complex'>

# String
s = "Hello, World!"
print(type(s))   # Output: <class 'str'>

# Boolean
flag = False
print(type(flag))  # Output: <class 'bool'>

# List (ordered, mutable collection)
my_list = [1, 2, 3, "four", 5.0]
print(type(my_list))  # Output: <class 'list'>

# Tuple (ordered, immutable collection)
my_tuple = (1, 2, 3)
print(type(my_tuple))  # Output: <class 'tuple'>

# Dictionary (key-value pairs)
my_dict = {"name": "Bob", "age": 25}
print(type(my_dict))  # Output: <class 'dict'>

# Set (unordered collection of unique items)
my_set = {1, 2, 3, 3}
print(my_set)         # Output: {1, 2, 3}
print(type(my_set))   # Output: <class 'set'>

# Variable Operations

# Arithmetic Operations
x = 10
y = 3
print(x + y)  # Addition: 13
print(x - y)  # Subtraction: 7
print(x * y)  # Multiplication: 30
print(x / y)  # Division: 3.333...
print(x // y) # Floor Division: 3
print(x % y)  # Modulus: 1
print(x ** y) # Exponentiation: 1000

# String Concatenation
str1 = "Hello"
str2 = "World"
print(str1 + " " + str2)  # Output: Hello World

# Type Casting
x = 5       # int
y = 2.5     # float
z = "10"    # str

# Convert int to float
a = float(x)
print(a)         # Output: 5.0
print(type(a))   # Output: <class 'float'>

# Convert float to int
b = int(y)
print(b)         # Output: 2
print(type(b))   # Output: <class 'int'>

# Convert str to int
c = int(z)
print(c)         # Output: 10
print(type(c))   # Output: <class 'int'>

# Constants
# Python doesn't have built-in constant types, but by convention,
# variables written in uppercase are treated as constants.

PI = 3.14159
GRAVITY = 9.8