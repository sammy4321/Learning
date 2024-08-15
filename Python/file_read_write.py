# Open a file for writing (create a new file if it doesn't exist)
with open("example.txt", "w") as file:
    # Write some text to the file
    file.write("Hello, world!")

# Open the file for reading (assuming it exists)
with open("example.txt", "r") as file:
    # Read the contents of the file
    contents = file.read()
    print(contents)  # Output: "Hello, world!"

# Open the file for writing (create a new file if it doesn't exist)
with open("example.txt", "w") as file:
    file.write_lines(["Hello, world!", "This is a test file"])