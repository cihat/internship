input_1 = input(
    "Lütfen birşey yazın(Girdiğiniz değerlerin harf sayısı çift olsun): ")
input_2 = input(
    "Lütfen birşey daha yazın:(Girdiğiniz değerlerin harf sayısı çift olsun) ")

if (int(len(input_1)) % 2 != 0) or (int(len(input_2)) % 2 != 0) or int(len(input_1)) == 0 or int(len(input_2)) == 0:
    print("Lütfen geçerli sayılar giriniz...")
else:
    print(input_1[:int(len(input_1)/2)] +
          input_2 + input_2[int(len(input_2) / 2):])
