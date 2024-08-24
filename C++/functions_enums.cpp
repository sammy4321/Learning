#include <iostream>

// Function declaration
int add(int a, int b);
double add(double a, double b);

// Enum declaration
enum class Color {
    Red,
    Green,
    Blue
};

// Function template
template <typename T>
T multiply(T a, T b) {
    return a * b;
}

int main() {
    // Function usage
    int intSum = add(5, 3); // Calls the int version of add
    double doubleSum = add(2.5, 3.5); // Calls the double version of add

    std::cout << "Integer sum: " << intSum << std::endl;
    std::cout << "Double sum: " << doubleSum << std::endl;

    // Enum usage
    Color favoriteColor = Color::Green;

    switch (favoriteColor) {
        case Color::Red:
            std::cout << "Favorite color is Red." << std::endl;
            break;
        case Color::Green:
            std::cout << "Favorite color is Green." << std::endl;
            break;
        case Color::Blue:
            std::cout << "Favorite color is Blue." << std::endl;
            break;
        default:
            std::cout << "Unknown color." << std::endl;
            break;
    }

    // Function template usage
    int intProduct = multiply(4, 5); // Calls the template with int
    double doubleProduct = multiply(1.5, 2.5); // Calls the template with double

    std::cout << "Integer product: " << intProduct << std::endl;
    std::cout << "Double product: " << doubleProduct << std::endl;

    return 0;
}

// Function definitions
int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}

// In this code:
// 1. Functions: int add(int a, int b) and double add(double a, double b) are simple functions to add two numbers, overloaded to handle different types.
// 2. Enums: enum class Color defines an enumeration for colors, providing a way to group related constants.
// 3. Function Overloading: The add function is overloaded to handle both int and double types.
// 4. Function Templates: template <typename T> T multiply(T a, T b) is a template function that multiplies two values of any type that supports multiplication. Function templates in C++ are a powerful feature that allows you to write generic and reusable functions. Instead of writing multiple versions of a function to handle different data types, you can use a template to create a single function that works with any type.