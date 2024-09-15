try:
    with open('existing-file.txt', 'r') as f:
        pass
except FileNotFoundError: # If there is an error then except is triggered.
    print("Error: File not found!")
except IOError:
    print("Error: I/O error!")
else: # If no error then else is triggered.
    print("Read file successfully!") 
finally: # Finally is always triggered.
    print("Closing file...")