# # with open("./employees.txt", "r") as employee_file:
# #     print(employee_file.readable())


# filename = 'deneme.txt'

# with open(filename) as file_content:
#     content = file_content.read()
#     print(content)

# read file that "r" parametre
employee_file = open("./employees.txt", "r")

# print(employee_file.readable())
# print(employee_file.readlines())

for employee in employee_file.readlines():
    print(employee)

employee_file = open("./employees.txt", "a")
# "a" parametresi ile dosyaya ekleme yapabiliriz. İsminden de anlaşılabileceği gibi add'in a sıdır.
# Ayrıca "w" vardır bu da herşeyin üzerine yazar yani öncekileri siler ve daha sonra yeni gelen contenti ekler.
# Eğer dosya yoksa yeni bir dosya yaratır.
employee_file = open("./employees2.txt", "w")


employee_file.write("\nToby - Human Resources")


employee_file.close()
