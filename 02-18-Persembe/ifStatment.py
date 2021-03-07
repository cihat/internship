""" is_Male = False
is_tall = False

if is_Male or is_tall:
    print("You are male or tall or both")
elif is_Male == False:
    print("You are neither male nor tall")
"""

is_male = False
is_tall = True

if is_male and is_tall:
    print("You are a tall male")
elif is_male and not (is_tall):
    print("You are a short male")
elif not (is_male) and (is_tall):
    print("You are not a male but are tall")
else:
    print("You are not a male and not tall")
