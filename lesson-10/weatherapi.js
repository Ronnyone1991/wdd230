const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=6eaafa6a5e118a5a4624a2623c1868e4";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp.toFixed(0);
  });
