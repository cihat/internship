const person = {
  name: "Max",
  age: 29,
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

const printName = ({ name, age }) => {
  console.log(name, age);
};
printName(person);

//* Bu yönteme descructuring denir. Objeyi yok etme olarak türkçeye çevrilebilinir.
const { name, age } = person;
console.log(name, age);

//* Descruturing yöntemi ile Arraylari de parçalayabilirz. Üstelik methodların aksine yeni isimlerde verebiliriz.
const hobbies = ["Sports", "Cooking"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
