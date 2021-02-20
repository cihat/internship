number_1 = float(input("Bir Sayı Giriniz: "))
number_2 = float(input("Bir Sayı Giriniz: "))
operator = input("Lütfen yapmak istediğiniz işlemini yazınız(/, +, -, *): ")

result = 0

if operator == "*":
    result = number_1 * number_2
elif operator == "-":
    result = number_1 - number_2
elif operator == "+":
    result = number_1 + number_2
elif operator == "/":
    result = number_1 / number_2
else:
    print("Lütfen geçerli bir işlemi tuşlayınız.")

print("Sonuç: " + str(result))
