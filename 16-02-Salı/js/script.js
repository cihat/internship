const button = document.querySelector("#button");
const input = document.querySelector("#city-input");
const answerText = document.querySelector("#answerText");
const mapElement = document.querySelector("#map");

var map = L.map("map").setView([39, 35], 5, {
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
    })
  )
  .setPopupContent(`Ankara 🌆`)
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
    .setPopupContent(`${data.capital} 🌇`)
    .openPopup();
};

const convert = (value) => {
  const { latitude } = value.coords;
  const { longitude } = value.coords;
  loadMap([latitude, longitude]);
};

const getPosition = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(convert),
      () => {
        alert(`Could not get your position`);
      };
  }
};

getPosition();

const showCity = (data) => {
  console.log(data.latlng);
  console.log(data.capital);
  answerText.textContent = data.capital;
  console.log(data.latlng);
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
    .setPopupContent(`Capital`)
    .openPopup();
};

const getCountryData = (country) => {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((response) => {
      // console.log(response);
      return response.json();
    })
    .then((data) => {
      loadMap(data[0]);
    });
};

//! addEventListener
button.addEventListener("click", () => {
  const inputValue = input.value;
  getCountryData(`${inputValue}`);
});
