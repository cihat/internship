console.log("first console");

const fetchData = (callback) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ali Ayşeyi Seviyor!");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("timer is done !");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
    });
}, 2000);

console.log("Hello");
console.log("Hİ");
