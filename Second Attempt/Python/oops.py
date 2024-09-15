###### Basic Example : 
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        print("Woof!")

my_dog = Dog("Fido", 3)
print(my_dog.name)  # Outputs: Fido
my_dog.bark()  # Outputs: Woof!

###### Inheritance : 
class Animal:
    def __init__(self, name):
        self.name = name

    def sound(self):
        print("The animal makes a sound.")

class Dog(Animal):
    def __init__(self, name, age):
        super().__init__(name)
        self.age = age

    def sound(self):
        print("The dog barks.")

my_dog = Dog("Fido", 3)
print(my_dog.name)  # Outputs: Fido
my_dog.sound()  # Outputs: The dog barks.

###### Polymorphism : 
class Shape:
    def area(self):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * (self.radius ** 2)

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

shapes = [Circle(5), Rectangle(4, 6)]
for shape in shapes:
    print(shape.area())  # Outputs: 78.5, and 24


###### Dunder Methods : 
class Car:
    def __init__(self, brand, color):
        self.brand = brand
        self.color = color
        self.speed = 0

    def __str__(self):
        return f"{self.color} {self.brand} car"

    def __eq__(self, other):
        return self.brand == other.brand and self.color == other.color

    def __gt__(self, other):
        return self.speed > other.speed

    def accelerate(self):
        self.speed += 10
        print(f"Accelerating... Current speed: {self.speed}")

    def brake(self):
        self.speed -= 10
        print(f"Braking... Current speed: {self.speed}")


# Creating a few cars
my_car = Car("Toyota", "Blue")
your_car = Car("Toyota", "Blue")
another_car = Car("Ford", "Red")

# Test dunder methods:
print(str(my_car))  # o/p: Blue Toyota car
print(my_car == your_car)  # o/p: True
print(my_car > your_car)  # o/p: False (assuming other_car speed is higher)
print(my_car > another_car)  # o/p: True

# Test other methods:
my_car.accelerate()
my_car.accelerate()
print(my_car.speed)  # o/p: 20

my_car.brake()
print(my_car.speed)  # o/p: 10

print(another_car.speed)  # o/p: 0

# Dunder methods are special methods predefined in Python that you can override to change or extend the behavior of objects of your classes. The term dunder is a shorthand for "double underscore".
# Available Dunder methods : 
# Object Creation and Destruction : 
# __init__(self, ...): Initializes a new instance of a class.
# __new__(cls, ...): Creates and returns a new instance of the class (rarely used).
# __del__(self): Defines behavior for when an object is destroyed (destructor).
# Object Representation : 
# __str__(self): Returns a "pretty" or user-friendly string representation of the object (used by print()).
# __repr__(self): Returns a formal string representation of the object for debugging (used by repr()).
# __format__(self, format_spec): Defines behavior for formatting the object with format().
# Attribute Access : 
# __getattr__(self, name): Defines behavior when accessing an attribute that doesn't exist.
# __getattribute__(self, name): Defines behavior for accessing any attribute.
# __setattr__(self, name, value): Defines behavior for setting an attribute.
# __delattr__(self, name): Defines behavior for deleting an attribute.
# __dir__(self): Defines behavior for listing attributes of the object (used by dir()).
# Attribute Management : 
# __get__(self, instance, owner): Defines behavior for retrieving an attribute from a descriptor.
# __set__(self, instance, value): Defines behavior for setting an attribute on a descriptor.
# __delete__(self, instance): Defines behavior for deleting an attribute from a descriptor.
# Container Emulation (List, Dict, etc.) : 
# __len__(self): Returns the length of the object (used by len()).
# __getitem__(self, key): Defines behavior for getting an item using indexing (obj[key]).
# __setitem__(self, key, value): Defines behavior for setting an item using indexing.
# __delitem__(self, key): Defines behavior for deleting an item using indexing.
# __contains__(self, item): Defines behavior for checking membership (in operator).
# __iter__(self): Returns an iterator for the object (used by for loops).
# __next__(self): Returns the next item in an iterator (used by next()).
# Callable Objects : 
# __call__(self, *args, **kwargs): Defines behavior for making an object callable like a function.
# Arithmetic Operators : 
# __add__(self, other): Defines behavior for the addition operator (+).
# __sub__(self, other): Defines behavior for the subtraction operator (-).
# __mul__(self, other): Defines behavior for the multiplication operator (*).
# __truediv__(self, other): Defines behavior for the division operator (/).
# __floordiv__(self, other): Defines behavior for floor division (//).
# __mod__(self, other): Defines behavior for the modulo operator (%).
# __pow__(self, other): Defines behavior for the exponentiation operator (**).
# __and__(self, other): Defines behavior for the bitwise AND operator (&).
# __or__(self, other): Defines behavior for the bitwise OR operator (|).
# __xor__(self, other): Defines behavior for the bitwise XOR operator (^).
# __lshift__(self, other): Defines behavior for the bitwise left shift operator (<<).
# __rshift__(self, other): Defines behavior for the bitwise right shift operator (>>).
# In-Place Arithmetic Operators : 
# __iadd__(self, other): Defines behavior for in-place addition (+=).
# __isub__(self, other): Defines behavior for in-place subtraction (-=).
# __imul__(self, other): Defines behavior for in-place multiplication (*=).
# __itruediv__(self, other): Defines behavior for in-place division (/=).
# __ifloordiv__(self, other): Defines behavior for in-place floor division (//=).
# __imod__(self, other): Defines behavior for in-place modulo (%=).
# __ipow__(self, other): Defines behavior for in-place exponentiation (**=).
# __iand__(self, other): Defines behavior for in-place bitwise AND (&=).
# __ior__(self, other): Defines behavior for in-place bitwise OR (|=).
# __ixor__(self, other): Defines behavior for in-place bitwise XOR (^=).
# __ilshift__(self, other): Defines behavior for in-place left shift (<<=).
# __irshift__(self, other): Defines behavior for in-place right shift (>>=).
# Comparison Operators : 
# __eq__(self, other): Defines behavior for the equality operator (==).
# __ne__(self, other): Defines behavior for the inequality operator (!=).
# __lt__(self, other): Defines behavior for the less-than operator (<).
# __le__(self, other): Defines behavior for the less-than-or-equal operator (<=).
# __gt__(self, other): Defines behavior for the greater-than operator (>).
# __ge__(self, other): Defines behavior for the greater-than-or-equal operator (>=).
# Type Conversion : 
# __int__(self): Defines behavior for converting an object to an integer (used by int()).
# __float__(self): Defines behavior for converting an object to a float (used by float()).
# __bool__(self): Defines behavior for converting an object to a boolean (used by bool()).
# Object Lifecycle and Garbage Collection : 
# __copy__(self): Defines behavior for shallow copying an object.
# __deepcopy__(self, memo): Defines behavior for deep copying an object.
# __del__(self): Called when an object is about to be destroyed (destructor).
# Context Managers : 
# __enter__(self): Defines behavior for entering a context (used by with).
# __exit__(self, exc_type, exc_value, traceback): Defines behavior for exiting a context.
# Object Identity and Hashing : 
# __hash__(self): Returns the hash of the object (used by hash() and for dictionary keys).
# __eq__(self, other): Defines equality comparison (required if __hash__() is implemented).
# Others : 
# __bytes__(self): Defines behavior for converting an object to bytes (used by bytes()).
# __call__(self, *args, **kwargs): Makes an object callable like a function.
# __index__(self): Defines behavior for integer-like objects (used by bin(), hex(), oct()).
# __sizeof__(self): Returns the size of the object in memory (used by sys.getsizeof()).
# __missing__(self, key): Defines behavior when a dictionary key is missing (used by dict subclasses).
