# print(2 ** 3)


def raise_to_power(base_num, pow_num):
    result = 1
    for index in range(pow_num):
        result = result * base_num
    return result


print(raise_to_power(2, 6))

# 2D Lists & Nested Loops
# Yani diğer programlama dillerindeki ismiyle İki boyutlu diziler

number_grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

for row in number_grid:
    for col in row:
        print(col)