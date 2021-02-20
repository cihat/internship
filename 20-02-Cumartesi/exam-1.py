first_number = int(input("First Number: "))
second_number = int(input("Second Number: "))

if first_number < second_number:
    print("Girdiğiniz Sayılardan " + str(first_number) + " daha küçüktür.")
elif second_number < first_number:
    print("Girdiğiniz Sayılardan " + str(second_number) + " daha küçüktür.")
else:
    print("Girdiğiniz sayılar aynıdır.")
