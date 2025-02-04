## Run C++ Code

```bash
g++ main.cpp
```
## Variables Size 

| Type             | Modifiers          | Size (bytes) | Range                                                      |
|------------------|--------------------|--------------|-----------------------------------------------------------|
| short int        | signed (default)  | 2            | -32,768 to 32,767                                         |
| short int        | unsigned          | 2            | 0 to 65,535                                               |
| int              | signed (default)  | 4            | -2,147,483,648 to 2,147,483,647                           |
| int              | unsigned          | 4            | 0 to 4,294,967,295                                        |
| long int         | signed (default)  | 4 or 8*      | -2,147,483,648 to 2,147,483,647 (4 bytes) or larger in 64-bit systems |
| long int         | unsigned          | 4 or 8*      | 0 to 4,294,967,295 (4 bytes) or larger in 64-bit systems  |
| long long int    | signed (default)  | 8            | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807   |
| long long int    | unsigned          | 8            | 0 to 18,446,744,073,709,551,615                           |
| float            | N/A               | 4            | ~1.2E-38 to 3.4E+38                                       |
| double           | N/A               | 8            | ~2.2E-308 to 1.8E+308                                     |
| long double      | N/A               | 16 (typically)| ~3.4E-4932 to 1.1E+4932                                   |
| char             | signed (default)  | 1            | -128 to 127                                               |
| char             | unsigned          | 1            | 0 to 255                                                  |
| bool             | N/A               | 1            | true (1) or false (0)                                     |
| void             | N/A               | 0            | N/A (used to represent no type or no value)               |
