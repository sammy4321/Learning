#include <iostream>
#include <vector>
#include <algorithm> // For STL algorithms

int main() {
    // Vector initialization
    std::vector<int> vec = {10, 5, 20, 15, 30, 25};

    // 1. Sorting
    std::sort(vec.begin(), vec.end()); // Sort in ascending order
    std::cout << "Sorted vector: ";
    for (const auto& elem : vec) {
        std::cout << elem << " ";
    }
    std::cout << std::endl;

    // 2. Finding an element
    auto it = std::find(vec.begin(), vec.end(), 20);
    if (it != vec.end()) {
        std::cout << "Element 20 found at position: " << std::distance(vec.begin(), it) << std::endl;
    } else {
        std::cout << "Element 20 not found." << std::endl;
    }

    // 3. Counting occurrences
    int count = std::count(vec.begin(), vec.end(), 15);
    std::cout << "Element 15 occurs " << count << " times." << std::endl;

    // 4. Accumulating values
    int sum = std::accumulate(vec.begin(), vec.end(), 0);
    std::cout << "Sum of elements: " << sum << std::endl;

    // 5. Transforming elements
    std::vector<int> transformedVec(vec.size());
    std::transform(vec.begin(), vec.end(), transformedVec.begin(), [](int x) { return x * 2; });
    std::cout << "Transformed vector (doubled values): ";
    for (const auto& elem : transformedVec) {
        std::cout << elem << " ";
    }
    std::cout << std::endl;

    // 6. Removing duplicates
    vec.push_back(10);
    vec.push_back(30);
    std::sort(vec.begin(), vec.end()); // Sorting needed for unique algorithm
    auto last = std::unique(vec.begin(), vec.end()); // Remove duplicates
    vec.erase(last, vec.end()); // Erase the removed duplicates
    std::cout << "Vector after removing duplicates: ";
    for (const auto& elem : vec) {
        std::cout << elem << " ";
    }
    std::cout << std::endl;

    // 7. Reversing elements
    std::reverse(vec.begin(), vec.end());
    std::cout << "Reversed vector: ";
    for (const auto& elem : vec) {
        std::cout << elem << " ";
    }
    std::cout << std::endl;

    return 0;
}
