const townsRequestURL =
  "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(townsRequestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const town = jsonObject["towns"];
    document.getElementById("eventone").textContent = town[0].events[0];
    document.getElementById("eventTwo").textContent = town[0].events[1];
    document.getElementById("eventThree").textContent = town[0].events[2];
  });
