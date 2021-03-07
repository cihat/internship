# for loops
# for letter in "Cihat Salik":
#     print(letter)


friends = ["Hasan", "Mahmut", "Ali", "Veli"]
for friend in friends:
    print(friend)


for index in range(3, 10):
    print(index)


for index in range(len(friends)):
    print(friends[index])


for index in range(5):
    if index == 0:
        print("First Iteration")
    else:
        print("Not first")
