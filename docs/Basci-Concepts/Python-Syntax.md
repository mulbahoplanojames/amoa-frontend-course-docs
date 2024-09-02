---
sidebar_position: 2
---

# Python Syntax

Mastering the syntax of Python is essential for writing effective and error-free code. Python’s syntax is designed to be intuitive and easy to read, but it also requires adherence to specific rules that govern how the language functions. Below are some of the fundamental aspects of Python syntax that every we should understand.

### Variables and Data Types

Variables in Python are symbolic names that reference or point to data stored in the computer’s memory. Unlike many other programming languages, Python does not require you to declare the type of a variable when you create it. Python is dynamically typed, meaning the type of the variable is determined at runtime and can even change over time.

For Example

```
x = 5           # Integer
y = 3.14         # Float (floating-point number)
name = "John"    # String
is_valid = True  # Boolean
```

In this example, `x` starts as an integer but can later be reassigned as a string. This flexibility is one of Python’s strengths, but it also requires careful management to avoid errors related to unexpected type changes.

Common data types in Python include:

- **Integers (`int`):** Whole numbers, e.g., 5, -10.
- **Floating-point numbers (`float`):** Numbers with a decimal point, e.g., 3.14, -0.001.
- **Strings (`str`):** Sequences of characters, e.g., "Hello", "Python".
- **Booleans (`bool`):** True or False values.

Here’s an example of working with different data types:

```
# Integers and floats

a = 10
b = 2.5
result = a \* b # Multiplying an integer by a float results in a float
print(result) # Output: 25.0

# Strings

greeting = "Hello"
name = "Alice"
message = greeting + ", " + name + "!" # String concatenation
print(message) # Output: Hello, Alice!

# Booleans

is_raining = False
print(not is_raining) # Output: True
```

### Basic Operators

Python provides a rich set of operators that allow you to perform various operations on variables and values. These operators are categorized based on the type of operation they perform.

1. **Arithmetic Operators:**
   Arithmetic operators are used to perform mathematical operations on numeric data types, such as integers and floating-point numbers. Python supports the standard arithmetic operations, allowing you to perform addition, subtraction, multiplication, division, and more.

Here are some commonly used arithmetic operators:

- **Addition (`+`):** Adds two numbers together.
- **Subtraction (`-`):** Subtracts the second number from the first.
- **Multiplication (`\`):** Multiplies two numbers.
- **Division (`/`):** Divides the first number by the second. The result is always a floating-point number, even if both operands are integers.
- **Modulus (`%`):** Returns the remainder of the division of the first number by the second. This operator is particularly useful for determining if a number is even or odd.
- **Exponentiation (`*`):** Raises the first number to the power of the second number.
- **Floor Division (`//`):** Divides the first number by the second and returns the largest integer less than or equal to the result.

```
x = 10
y = 3

# Addition
sum_result = x + y  # 10 + 3 = 13

# Subtraction
difference = x - y  # 10 - 3 = 7

# Multiplication
product = x * y  # 10 * 3 = 30

# Division
quotient = x / y  # 10 / 3 = 3.3333...

# Modulus
remainder = x % y  # 10 % 3 = 1

# Exponentiation
power = x ** y  # 10 ** 3 = 1000

# Floor Division
floor_div = x // y  # 10 // 3 = 3

print("Sum:", sum_result)
print("Difference:", difference)
print("Product:", product)
print("Quotient:", quotient)
print("Remainder:", remainder)
print("Power:", power)
print("Floor Division:", floor_div)
```

2. ### Comparison Operators

Comparison operators allow you to compare two values and determine their relationship. These operators are essential for decision-making in programming, as they help in forming conditions that guide the flow of a program.

Here are the most commonly used comparison operators:

- **Equal to (`==`):** Checks if two values are equal.
- **Not equal to (`!=`):** Checks if two values are not equal.
- **Greater than (`>`):** Checks if the first value is greater than the second.
- **Less than (`<`):** Checks if the first value is less than the second.
- **Greater than or equal to (`>=`):** Checks if the first value is greater than or equal to the second.
- **Less than or equal to (`<=`):** Checks if the first value is less than or equal to the second.

Examples :

```
a = 10
b = 5

# Equal to
print(a == b)  # False, because 10 is not equal to 5

# Not equal to
print(a != b)  # True, because 10 is not equal to 5

# Greater than
print(a > b)  # True, because 10 is greater than 5

# Less than
print(a < 15)  # True, because 10 is less than 15

# Greater than or equal to
print(a >= 10)  # True, because 10 is equal to 10

# Less than or equal to
print(a <= 5)  # False, because 10 is not less than or equal to 5
```

3. ### Logical Operators

   Logical operators are used to combine multiple conditions or expressions, allowing you to form more complex conditions in your code. These operators return True or False based on the logical relationship between the conditions.

**Python supports the following logical operators:**

- **AND (`and`):** Returns True if both conditions are true.
- **OR (`or`):** Returns True if at least one of the conditions is true.
- **NOT (`not`):** Inverts the boolean value of a condition. If the condition is True, it returns False, and vice versa.

Examples:

```
x = 10
y = 5
z = 2

# Logical AND
print((x > y) and (y > z))  # True, because both x > y and y > z are True

# Logical OR
print((x > y) or (y > x))  # True, because x > y is True, even though y > x is False

# Logical NOT
print(not (x > y))  # False, because x > y is True, and not True is False
```

Understanding these basic operators—arithmetic, comparison, and logical—is fundamental to working effectively with Python. They allow you to perform calculations, compare values, and create complex conditional statements, which are the building blocks of any Python program. Mastering these operators will provide you with the tools needed to solve a wide range of programming challenges and to write more efficient and powerful code.

### Comments

Comments are an integral part of writing clear and maintainable code. In Python, comments are used to annotate code, making it easier for others (and yourself) to understand what the code is doing. Comments are ignored by the Python interpreter, meaning they do not affect the execution of the code.

Single-line comments are created using the `#` symbol:

```
# This is a single-line comment explaining the following line of code
print("Hello, World!")  # This comment explains the purpose of this print statement
```

For multi-line comments or docstrings, which can span multiple lines, Python uses triple quotes (`'''` or `"""`):

```
"""
This is a multi-line comment.
It can span several lines and is often used for documentation.
"""
```

Multi-line comments are particularly useful for providing detailed explanations or documenting functions and classes:

```
def add_numbers(a, b):
    """
    This function takes two arguments:
    a: First number
    b: Second number
    It returns the sum of the two numbers.
    """
    return a + b
```

### Indentation

In Python, indentation is not just a matter of style—it is a fundamental part of the language’s structure. Indentation is used to define the blocks of code that belong to specific control structures, such as loops and conditional statements. Unlike many other programming languages that use braces `{}` or keywords to delineate blocks of code, Python relies solely on indentation. This makes Python code visually clean and easy to follow, but it also means that correct indentation is critical for the code to function properly.

Consider the following example of an `if` statement:

```
# Correct indentation
if True:
    print("This line is indented and part of the if block")
    for i in range(3):
        print("Loop iteration:", i)

# Incorrect indentation (will raise an IndentationError)
if True:
print("This line is not indented and will cause an error")

```

In this example, the first block of code is correctly indented, with the `print` statement and the `for` loop inside the `if` statement. The second block, however, will result in an error because the `print` statement is not indented, which violates Python's syntax rules.
