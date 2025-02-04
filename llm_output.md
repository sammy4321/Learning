**Hello World in Python**
==========================

Here's a simple "Hello, World!" program in Python:

```python
# This is a comment - ignored by the interpreter

def main():
    # Print "Hello, World!" to the console
    print("Hello, World!")

if __name__ == "__main__":
    # Call the main function when this script is run directly
    main()
```

Save this code in a file with a `.py` extension (e.g., `hello.py`) and run it using Python:

```bash
$ python hello.py
Hello, World!
```

**Explanation**

* The `#` symbol introduces a comment - anything after it on the same line is ignored by the interpreter.
* The `def main():` block defines a function named `main`.
* Inside `main()`, we use `print()` to output "Hello, World!" to the console.
* The `if __name__ == "__main__":` block ensures that `main()` is only executed when this script is run directly (not imported as a module).

That's it! This simple code should be your starting point for any Python project.
