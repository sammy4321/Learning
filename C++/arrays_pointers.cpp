#include <iostream>

int main() {
    // Arrays
    int numbers[5] = {1, 2, 3, 4, 5}; // Array of integers

    std::cout << "Array elements:" << std::endl;
    for (int i = 0; i < 5; ++i) {
        std::cout << numbers[i] << " ";
    }
    std::cout << std::endl;

    // Pointers
    int value = 10;
    int *ptr = &value; // Pointer to an integer

    std::cout << "Pointer example:" << std::endl;
    std::cout << "Value: " << value << std::endl;
    std::cout << "Pointer points to value: " << *ptr << std::endl;
    std::cout << "Address of value: " << ptr << std::endl;

    // References
    int &ref = value; // Reference to an integer

    std::cout << "Reference example:" << std::endl;
    std::cout << "Value: " << value << std::endl;
    std::cout << "Reference points to value: " << ref << std::endl;

    // Modify the value through reference
    ref = 20;
    std::cout << "Modified value: " << value << std::endl;
    std::cout << "Modified reference: " << ref << std::endl;

    return 0;
}
// In this code:
//     1. Arrays: int numbers[5] creates an array of 5 integers, and we use a for loop to print its elements.
//     2. Pointers: int *ptr is a pointer to an integer, initialized with the address of value. We use *ptr to dereference the pointer and get the value it points to.
//     3. References: int &ref is a reference to value. Modifying ref also changes value, demonstrating how references provide an alias to the original variable.