# # with open("./employees.txt", "r") as employee_file:
# #     print(employee_file.readable())


# filename = 'deneme.txt'

# with open(filename) as file_content:
#     content = file_content.read()
#     print(content)


employee_file = open("./deneme.txt", "r")

# print(employee_file.readable())
# print(employee_file.readlines())

for employee in employee_file.readlines():
    print(employee)


employee_file.close()
