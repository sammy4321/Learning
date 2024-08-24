#include <iostream>
#include <string>

int main() {

    int age = 25;
    float height = 1.75f;
    double weight = 70.5;
    char initial = 'A';
    bool isStudent = true;

    std::string name = "John Doe";
    std::cout << "Name: " << name << std::endl;
    std::cout << "Age: " << age << std::endl;
    std::cout << "Height: " << height << " meters" << std::endl;
    std::cout << "Weight: " << weight << " kg" << std::endl;
    std::cout << "Initial: " << initial << std::endl;
    std::cout << "Is Student: " << (isStudent ? "Yes" : "No") << std::endl;

    return 0;
}