from math import *

print("Hello Word!!!")

# String Methods
letter = "Cihat Salik"
print(letter.upper())
print(letter.upper().isupper())
print("hello guyss".isupper())
letter = "Ali Ayşe"
print(len(letter))
print(letter[0])
print(letter.index("Ayşe"))

"""
def limit(arr, min_lim=None, max_lim=None):
    min_check = lambda val: True if min_lim is None else (min_lim <= val)
    max_check = lambda val: True if max_lim is None else (val <= max_lim)
    
    return [val for val in arr if min_check(val) and max_check(val)]

"""

# string methods
my_num = 5
# hatalı koddur çünkü hem string hem de numberı toplayamaz tip uyuşmazlığı var
# print(5 + "Ali veli")
print(str(my_num) + " my favorite number!!")

my_num = -5
print(my_num)
my_num = abs(my_num)
print(my_num)
print(pow(my_num, 2))
print(max(123, 34, 3434, 343, 34435, 56765, 5675765, 56765756, 67, 75, 76, 5, 67, 8))
print(min(123, 10, 34, 3434, 343, 34435, 56765, 5675765, 56765756, 67, 75, 76, 5, 1, 8))

print(round(3.49))
print(floor(4545.95656))
print(ceil(4.1))
print(sqrt(81))

# İnput
name = input("Please Enter your name: ")
age = input("enter your age")
print("Hello Mrs." + name + "You are " + age)
