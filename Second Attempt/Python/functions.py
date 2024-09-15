def example_function(name:str,age:int,*args,**kwargs) -> str: 
    """Do something. This is called docstrings"""
    print(name,age,args,kwargs)
    return "Done","Yes"

returned_val1,returned_val2 = example_function("John",25,"Male","Engineer",hobby="Reading",city="New York")
# name = "John", age = 25, args = ("Male","Engineer"), kwargs = {"hobby":"Reading","city":"New York"}
# returned_val1 = "Done", returned_val2 = "Yes"

add = lambda x, y: x + y
result = add(5, 3)
print(result)  # Output: 8