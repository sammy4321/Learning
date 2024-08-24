#include <iostream>
#include <vector>
#include <list>
#include <deque>
#include <map>
#include <set>
#include <algorithm> // For algorithms like std::sort

int main() {
    // Vector example
    std::vector<int> vec = {1, 2, 3, 4, 5};
    
    std::cout << "Vector elements: ";
    for (const auto& elem : vec) {
        std::cout << elem << " ";
    }
    std::cout << std::endl;

    // List example
    std::list<std::string> strList = {"Hello", "World", "C++"};
    
    std::cout << "List elements: ";
    for (const auto& elem : strList) {
        std::cout << elem << " ";
    }
    std::cout << std::endl;

    // Deque example
    std::deque<double> deq = {1.1, 2.2, 3.3, 4.4};
    
    std::cout << "Deque elements: ";
    for (const auto& elem : deq) {
        std::cout << elem << " ";
    }
    std::cout << std::endl;

    // Map example
    std::map<std::string, int> ageMap = {{"Alice", 30}, {"Bob", 25}};
    
    std::cout << "Map elements (key-value pairs): ";
    for (const auto& pair : ageMap) {
        std::cout << pair.first << ": " << pair.second << " ";
    }
    std::cout << std::endl;

    // Set example
    std::set<int> intSet = {5, 3, 1, 4, 2};
    
    std::cout << "Set elements (sorted): ";
    for (const auto& elem : intSet) {
        std::cout << elem << " ";
    }
    std::cout << std::endl;

    // Using iterators with containers
    std::cout << "Using iterators with vector: ";
    for (auto it = vec.begin(); it != vec.end(); ++it) {
        std::cout << *it << " ";
    }
    std::cout << std::endl;

    std::cout << "Using iterators with list: ";
    for (auto it = strList.begin(); it != strList.end(); ++it) {
        std::cout << *it << " ";
    }
    std::cout << std::endl;

    // Sorting vector using STL algorithm
    std::sort(vec.begin(), vec.end(), std::greater<int>());
    std::cout << "Sorted vector in descending order: ";
    for (const auto& elem : vec) {
        std::cout << elem << " ";
    }
    std::cout << std::endl;

    return 0;
}
// STL Stands for Standard Template Library.
// Key Concepts Demonstrated : 
// Containers :
//     Vector (std::vector): A dynamic array that supports random access.
//     List (std::list): A doubly linked list that supports efficient insertions and deletions.
//     Deque (std::deque): A double-ended queue that supports efficient insertions and deletions at both ends.
//     Map (std::map): A sorted associative container that stores key-value pairs.
//     Set (std::set): A sorted associative container that stores unique elements.
// Iterators :
//     Vector Iteration: Iterates over a std::vector using begin() and end() iterators.
//     List Iteration: Iterates over a std::list using begin() and end() iterators.
//     Using Iterators: Demonstrates how to use iterators to access and modify container elements.
// 