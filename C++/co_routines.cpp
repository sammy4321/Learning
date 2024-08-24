#include <iostream>
#include <coroutine>
#include <vector>
#include <string>

// A simple coroutine that returns a value
struct ReturnValueTask {
    struct promise_type;
    using handle_type = std::coroutine_handle<promise_type>;

    struct promise_type {
        int value;
        ReturnValueTask get_return_object() { 
            return ReturnValueTask{handle_type::from_promise(*this)};
        }
        std::suspend_never initial_suspend() { return {}; }
        std::suspend_never final_suspend() noexcept { return {}; }
        void return_value(int v) { value = v; }
        void unhandled_exception() { std::terminate(); }
    };

    handle_type coro_handle;
    ReturnValueTask(handle_type h) : coro_handle(h) {}
    ~ReturnValueTask() { coro_handle.destroy(); }

    int getValue() const { return coro_handle.promise().value; }
};

// A coroutine that yields values
struct YieldingTask {
    struct promise_type;
    using handle_type = std::coroutine_handle<promise_type>;

    struct promise_type {
        std::vector<int> values;
        YieldingTask get_return_object() { 
            return YieldingTask{handle_type::from_promise(*this)};
        }
        std::suspend_always initial_suspend() { return {}; }
        std::suspend_always final_suspend() noexcept { return {}; }
        void return_void() {}
        void unhandled_exception() { std::terminate(); }
        std::coroutine_handle<> yield_value(int value) {
            values.push_back(value);
            return std::noop_coroutine();
        }
    };

    handle_type coro_handle;
    YieldingTask(handle_type h) : coro_handle(h) {}
    ~YieldingTask() { coro_handle.destroy(); }

    std::vector<int> getValues() const { return coro_handle.promise().values; }
};

// Coroutine that returns a value
ReturnValueTask computeValue() {
    co_return 42; // Return a single value
}

// Coroutine that yields multiple values
YieldingTask generateNumbers() {
    for (int i = 0; i < 5; ++i) {
        co_yield i; // Yield values one by one
    }
}

int main() {
    // Using coroutine that returns a value
    ReturnValueTask result = computeValue();
    std::cout << "Computed value: " << result.getValue() << std::endl;

    // Using coroutine that yields values
    YieldingTask numbers = generateNumbers();
    std::cout << "Generated numbers: ";
    for (int num : numbers.getValues()) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    return 0;
}
// Key Concepts Demonstrated : 
// 1. Return Value Coroutines : ReturnValueTask is a coroutine that returns a single integer value. The promise_type defines how the coroutine will return a value (return_value(int v)). The getValue() method retrieves this value.
// 2. Yielding Coroutines : YieldingTask is a coroutine that yields multiple integer values. The promise_type includes a yield_value(int value) method to handle each value yielded. Values are stored in a std::vector<int>, and the getValues() method retrieves these values.
// 3. Coroutine Syntax :
//     co_return is used to return a value from the coroutine.
//     co_yield is used to yield values from the coroutine one at a time.
// 4. Coroutine Handle: std::coroutine_handle<promise_type> is used to manage the coroutine's state. It provides access to the coroutine's promise and handles its execution.
// 5. Coroutine Lifecycle:
//     initial_suspend() and final_suspend() control when the coroutine starts and ends.
//     unhandled_exception() handles exceptions thrown within the coroutine.
