const button = document.querySelector("#button");
const input = document.querySelector("#city-input");
const answerText = document.querySelector("#answerText");
const mapElement = document.querySelector("#map");

var map = L.map("map").setView([39, 35], 4.5, {
  animate: true,
  pan: {
    duration: 1,
  },
});
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([39, 35])
  .addTo(map)
  .bindPopup(
    L.popup({
      maxWidth: 250,
      minWidth: 50,
      autoClose: false,
      closeOnClick: false,
    })
  )
  .setPopupContent(`Ankara🌆`)
  .openPopup();

const loadMap = (data) => {
  console.log(data.latlng);
  answerText.textContent = data.capital;

  L.marker(data.latlng)
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 50,
        autoClose: false,
        closeOnClick: false,
      })
    )
    .setPopupContent(`${data.capital}🌇`)
    .openPopup();

  map.panTo(data.latlng);
};

const convert = (value) => {
  const { latitude } = value.coords;
  const { longitude } = value.coords;
  loadMap([latitude, longitude]);
};

const getCountryData = (country) => {
  if (country == "") {
    alert("Please write a country name. Do not leave blank !☢");
  } else {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.status === 404 || country == "") {
          console.log(data.status);
          alert("The country name you typed is incorrect.💥");
        }
        loadMap(data[0]);
      });
  }
};

//! addEventListener
button.addEventListener("click", () => {
  const inputValue = input.value;
  getCountryData(`${inputValue}`);
  input.value = "";
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const inputValue = input.value;
    getCountryData(`${inputValue}`);
    input.value = "";
  }
});
