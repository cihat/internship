input_value = (input("Lütfen bir değer giriniz: "))
lower_val = input_value.lower()
count_letter = 0
count_number = 0
for letter in lower_val:
    if letter > "a" and letter < "z":
        count_letter += 1
    else:
        count_number += 1

print(str(count_letter) + " tane harf" + "\n" +
      str(count_number) + " tane sayı girdiniz.")
