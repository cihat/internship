input_number = int(input("Lütfen Bir Sayı Giriniz: "))

result = 1
# Girilen değeri tersten sondan başlayarak 0'a kadar 0 haric çarpıyork
for index in range(input_number, 0, -1):
    print(index)
    result *= index

print(result)
