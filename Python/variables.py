# 1. None
a = None
print(a) # Outputs: None

# 2. Integers (int)
a = 10
print(a) # Outputs: 10

# 3. Float numbers (float)
a = 10.5
print(a) # Outputs: 10.5

# 4. String
a = "Hello, World!"
print(a) # Outputs: Hello, World!

# 5. Boolean
a = True
print(a) # Outputs: True
a = False
print(a) # Outputs: False

# 6. Complex
a = 3 + 4j
print(a) # Outputs: (3+4j)

# 7. List
a = [1, "Hello", 2.5]
print(a) # Outputs: [1, 'Hello', 2.5]

# 8. Tuple
a = (1, "Hello", 2.5)
print(a) # Outputs: (1, 'Hello', 2.5)

# 9. Dictionary
a = {"Name": "John", "Age": 25}
print(a) # Outputs: {'Name': 'John', 'Age': 25}

# 10. setUser(name, age, occupation)
class User:
    def __init__(self, name, age, occupation):
        self.name = name
        self.age = age
        self.occupation = occupation
a = User("John", 25, "Software Eng.")
print(a.name) # Outputs: John
print(a.age) # Outputs: 25
print(a.occupation) # Outputs: Software Eng.

# 11. Set
a = {1, "Hello", 2.5}
print(a) # Output: {1, '2.5', 'Hello'}