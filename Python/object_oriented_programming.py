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