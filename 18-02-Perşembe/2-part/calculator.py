"""
num1 = input("Enter a number: ")
num2 = input("Enter another number: ")
num1 = int(num1)
num2 = int(num2)
result = num1 + num2

print(result)
"""

"""
color = input("Enter a color: ")
plural_noun = input("Enter a Plural Noun: ")
celebrity = input("Enter a celebrity: ")

print("Roses are " + color)
print(plural_noun + " are blue")
print("I love " + celebrity)
"""

# lists
from typing import Coroutine


friends = ["Kevin", "Karen", "Jim", "Oscar", "Toby"]
print(friends[1:])

# lists functions
lucky_numbers = [4, 8, 15, 16, 23, 42]
# friends.extend(lucky_numbers)
friends.append(["Mahmut", "Hasan", "Veli", ["Hacı", ["Muhammet"]]])
friends.append(["Can"])
friends.append("Musa")
friends.extend("Ömer")
friends.insert(0, "Cihat")
friends.remove("Toby")
# friends.clear()
friends.pop()
print(friends.index("Cihat"))
# print(friends.index("aslkf"))
print(friends.count("Cihat"))
print(friends)

# sort of the lucky number list
lucky_numbers.sort()

# reverse of the lucky number list
lucky_numbers.reverse()

# copy of the lucky number list
lucky_numbers_copy = lucky_numbers.copy()
print(lucky_numbers_copy)

print(lucky_numbers)


# Tuples
# Değişmezler js deki constlar gibi. Değeri değişmezler için tuples'lar kullanılır.
# coordinates = (2, 4)
# coordinates(0) = 34
# print(coordinates)

