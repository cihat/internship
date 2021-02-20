input_str = input("Lütfen bir String giriniz: ")

result = ""

for letter in input_str:
    low_letter = letter.lower()
    if low_letter == "ı":
        result += "i"
    elif low_letter == "ö":
        result += "o"
    elif low_letter == "ü":
        result += "u"
    elif low_letter == "ç":
        result += "c"
    elif low_letter == "ğ":
        result += "g"
    else:
        result += low_letter

print(result)
