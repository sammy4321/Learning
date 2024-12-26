#include <iostream>
constexpr double PI = 3.14159;  // Compile-time constant

int main(){
    int myInt = 42;
    float myFloat = 3.14f;
    char myChar = 'A';
    double myDouble = 3.141592653589793;
    bool myBool = true;
    auto myAuto = 5.5; // Compiler deduces 'double'

    const int myConst = 10;  
}