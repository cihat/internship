# WHİLE LOOP
i = 1
while i <= 10:
    print(i)
    i += 1

print("Done with loop")

secret_word = "zurafa"
guess = ""
guess_count = 0
guess_limit = 3
out_of_guesses = False

while guess != secret_word and not (out_of_guesses):
    if guess_count < guess_limit:
        guess = input("Enter guess: ")
        guess_count += 1
    else:
        out_of_guesses = True


if out_of_guesses:
    print("Out of Guesses, You Lose!")
else:
    print("You WIN!!!")