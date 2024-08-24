#include <iostream>
#include <stdexcept>

int divide(int numerator, int denominator) {
    if (denominator == 0) {
        throw std::invalid_argument("Division by zero is not allowed.");
    }
    return numerator / denominator;
}

int main() {
    int a = 10;
    int b = 0;
    int result;

    try {
        result = divide(a, b); // May throw an exception
        std::cout << "Result of division: " << result << std::endl;
    } catch (const std::invalid_argument& e) { // Catch specific exception
        std::cerr << "Error: " << e.what() << std::endl;
    } catch (const std::exception& e) { // Catch any other standard exception
        std::cerr << "Standard exception: " << e.what() << std::endl;
    } catch (...) { // Catch any other exceptions not derived from std::exception
        std::cerr << "Unknown error occurred." << std::endl;
    }

    std::cout << "Program continues running after exception handling." << std::endl;

    return 0;
}
