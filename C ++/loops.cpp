#include <iostream>
using namespace std;

int main() {
    // Example of a for loop
    cout << "Counting from 1 to 5 using for loop:" << endl;
    for (int i = 1; i <= 5; i++) {
        cout << i << " ";
    }
    cout << endl;
    // Example of a while loop
    int i = 1;
    cout << "Counting from 1 to 5 using while loop:" << endl;
    while (i <= 5) {
        cout << i << " ";
        i++;
    }
    cout << endl;

    // Example of break and continue
    cout << "Numbers from 1 to 10, skipping multiples of 3, stopping at 8:\n";

    for (int i = 1; i <= 10; i++) {
        if (i % 3 == 0) {
            // Skip multiples of 3
            continue;
        }

        if (i == 8) {
            // Stop the loop when i is 8
            break;
        }

        cout << i << " ";
    }


    return 0;
}
