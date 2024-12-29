#include <iostream>
using namespace std;

int main() {
    // 1. Declaring and Using Arrays
    int numbers[5] = {1, 2, 3, 4, 5}; // Integer array declaration and initialization

    // Accessing array elements
    cout << "Integer Array Elements: ";
    for (int i = 0; i < 5; i++) {
        cout << numbers[i] << " ";
    }
    cout << endl;

    // 2. Size of an Array
    int size = sizeof(numbers) / sizeof(numbers[0]);
    cout << "Size of Integer Array: " << size << endl;

    // 3. Array of Characters (String)
    char word[] = "Hello"; // Character array (null-terminated string)
    cout << "Character Array (String): " << word << endl;

    // 4. Multi-dimensional Array (2D Array)
    int matrix[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };
    cout << "2D Integer Array (Matrix):" << endl;
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            cout << matrix[i][j] << " ";
        }
        cout << endl;
    }

    // 5. Multi-dimensional Array of Characters (2D Character Array)
    char names[3][10] = {
        "Alice",
        "Bob",
        "Charlie"
    };

    cout << "2D Character Array (Names List):" << endl;
    for (int i = 0; i < 3; i++) {
        cout << names[i] << endl;
    }

    return 0;
}
