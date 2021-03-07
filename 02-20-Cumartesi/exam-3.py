from typing import Type

school = input("Lütfen Okulunuzun İsmini Giriniz: ")

words = school.split(" ")
words = words[::-1]


for word in words:
    if word.lower() == "üniversitesi" or word.lower() == "unıversitesı" or word.lower() == "üniversite" or word.lower() == "unıversıte":
        print("Üniversite öğrencisisin.")
        break
    elif word.lower() == "lisesi" or word.lower() == "lise" or word.lower == "lıse" or word.lower() == "lısesı":
        print("Lise öğrencisisin.")
        break
    elif word.lower() == "ilkokul" or word.lower() == "ilkokulu" or word.lower == "ilkokulu" or word.lower() == "ılkokulu":
        print("İlkokul öğrencisisin.")
        break
