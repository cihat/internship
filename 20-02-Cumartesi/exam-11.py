import random

numbers = []
for index in range(10):
    numbers.append(round((random.random() * 10)))

result = ""
print((numbers))
for index in range(len(numbers)):
    print(str(index) + "'den " + str(numbers.count(index)) + " tane vardır")


print(result)
