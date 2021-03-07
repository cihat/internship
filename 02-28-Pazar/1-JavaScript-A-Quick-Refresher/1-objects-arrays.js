const person = {
  name: "Cihat",
  age: 20,
  //! Burada arrow function kullanmıyoruz yoksa this anahtar kelimesine undefined verir.
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

person.greet();

const hobbies = ["Sports", "Cooking"];

//* Spead Operator ile bir objedeki attribute'leri en hızlı şekilde kopyalayabiliriz.
const copiedPerson = { ...person };
console.log(copiedPerson.name);

// for (const hobby of hobbies) {
//   console.log(hobby);
// }

//? copiedArray = hobbies.slice();
//* Spead Operator ile bir dizideki elemanları en hızlı şekilde kopyalayabiliriz.
const copiedArray = [...hobbies];
console.log(copiedArray);

const toArray = (arg1, arg2, ...args) => {
  console.log(arg1, arg2);
  console.log(args);
};
const toArray2 = (...args) => console.log(args);
toArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
toArray2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
