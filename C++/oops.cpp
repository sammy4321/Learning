#include <iostream>
#include <string>

// Base class: Encapsulation
class Shape {
public:
    // Constructor
    Shape(const std::string& name) : name(name) {}

    // Virtual function for polymorphism
    virtual void draw() const {
        std::cout << "Drawing a shape: " << name << std::endl;
    }

    // Static member function
    static int getShapeCount() {
        return shapeCount;
    }

protected:
    std::string name;

private:
    static int shapeCount; // Static member variable
};

// Initialize static member
int Shape::shapeCount = 0;

// Derived class: Inheritance
class Circle : public Shape {
public:
    Circle(const std::string& name, double radius) : Shape(name), radius(radius) {
        ++shapeCount;
    }

    void draw() const override { // Override virtual function
        std::cout << "Drawing a circle: " << name << " with radius " << radius << std::endl;
    }

    // Operator overloading: Comparison operator
    bool operator==(const Circle& other) const {
        return radius == other.radius;
    }

private:
    double radius;
};

// Derived class: Inheritance
class Rectangle : public Shape {
public:
    Rectangle(const std::string& name, double width, double height)
        : Shape(name), width(width), height(height) {
        ++shapeCount;
    }

    void draw() const override { // Override virtual function
        std::cout << "Drawing a rectangle: " << name << " with width " << width << " and height " << height << std::endl;
    }

private:
    double width, height;
};

int main() {
    Circle circle("MyCircle", 5.0);
    Rectangle rectangle("MyRectangle", 4.0, 6.0);

    // Demonstrating polymorphism
    Shape* shapes[2] = { &circle, &rectangle };
    for (int i = 0; i < 2; ++i) {
        shapes[i]->draw();
    }

    // Static member function
    std::cout << "Total shapes created: " << Shape::getShapeCount() << std::endl;

    // Operator overloading
    Circle anotherCircle("AnotherCircle", 5.0);
    if (circle == anotherCircle) {
        std::cout << "The two circles are equal in radius." << std::endl;
    } else {
        std::cout << "The two circles are not equal in radius." << std::endl;
    }

    return 0;
}

// Key Concepts Demonstrated : 
// 1. Encapsulation: Shape class encapsulates the name of the shape and provides a draw method. The shapeCount is a private static member, accessed via a static member function.
// 2. Inheritance: Circle and Rectangle inherit from the Shape class. They extend the Shape class by adding specific attributes (radius, width, and height) and overriding the draw method.
// 3. Polymorphism: Polymorphism is demonstrated by calling the draw method on Shape* pointers that point to Circle and Rectangle objects. This allows the correct draw method to be invoked based on the object type.
// 4. Static Members: The shapeCount static member variable keeps track of the number of Shape objects created. It is updated by the constructors of derived classes and accessed via the static member function getShapeCount.
// 5. Operator Overloading: The == operator is overloaded in the Circle class to compare two Circle objects based on their radius.