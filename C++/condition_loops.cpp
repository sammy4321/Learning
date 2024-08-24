#include <iostream>

int main() {
    int number = 10;
    if (number > 0) {
        std::cout << "The number is positive." << std::endl;
    } else if (number < 0) {
        std::cout << "The number is negative." << std::endl;
    } else {
        std::cout << "The number is zero." << std::endl;
    }
    
    switch (number) {
        case 1:
            std::cout << "The number is one." << std::endl;
            break;
        case 10:
            std::cout << "The number is ten." << std::endl;
            break;
        default:
            std::cout << "The number is something else." << std::endl;
            break;
    }

    int count = 0;
    std::cout << "While loop:" << std::endl;
    while (count < 5) {
        std::cout << "Count is " << count << std::endl;
        count++;
    }

    std::cout << "For loop:" << std::endl;
    for (int i = 0; i < 5; i++) {
        std::cout << "i is " << i << std::endl;
    }

    int j = 0;
    std::cout << "Do-while loop:" << std::endl;
    do {
        std::cout << "j is " << j << std::endl;
        j++;
    } while (j < 5);

    return 0;
}