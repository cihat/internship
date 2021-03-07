def positive_average(numbers):
    average = 0
    for number in numbers:
        if number > 0:
            average += number
    return average / len(numbers)


print(positive_average([4, 4, 4, 4, 4, 4]))


# def positive_average(numbers):
#     average = 0
#     for number in range(len(numbers)):
#         if numbers[number] > 0:
#             average += numbers[number]

#     return average / len(numbers)


# print(positive_average([4, 4, 4, 4, 4, 4]))
