try:
    with open('existing-file.txt', 'r') as f:
        pass
except FileNotFoundError:
    print("Error: File not found!")
except IOError:
    print("Error: I/O error!")
else:
    print("Read file successfully!")
finally:
    print("Closing file...")