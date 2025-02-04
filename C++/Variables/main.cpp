#include <iostream>
#include <iomanip> // For std::hex, std::oct, etc.

int main() {
    // Number Systems
    int decimalNumber = 42;             // Decimal
    int octalNumber = 042;              // Octal
    int hexNumber = 0x2A;               // Hexadecimal
    int binaryNumber = 0b101010;        // Binary (C++14 and later)

    // Decimals and Integers
    int integer = -10;
    float floatNumber = 3.14f;          // Float
    double doubleNumber = 2.71828;      // Double

    // Fractional Numbers
    float fractional = 5.25;

    // Booleans
    bool isCodingFun = true;            // Boolean values: true or false
    bool isTired = false;

    // Characters
    char letter = 'A';
    char digit = '9';
    char symbol = '#';

    // Using `auto`
    auto inferredInteger = 100;         // Inferred as int
    auto inferredFloat = 1.23f;         // Inferred as float
    auto inferredBoolean = true;        // Inferred as bool

    // Integer Modifiers
    unsigned int positiveNumber = 123; // Only non-negative
    signed int signedNumber = -123;    // Can be negative
    short int shortInt = 32767;
    long int longInt = 2147483647;
    long long int longLongInt = 9223372036854775807LL;


    return 0;
}
