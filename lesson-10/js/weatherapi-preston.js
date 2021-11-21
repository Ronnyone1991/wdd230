const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=6eaafa6a5e118a5a4624a2623c1868e4";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById("weatherdesc").textContent = 'Currently: ' + jsObject.weather[0].description;
    document.getElementById("humidity").textContent = 'Humidity: ' + jsObject.main.humidity + ' %';
    document.getElementById("windspeed").textContent = 'Wind Speed: ' + jsObject.wind.speed + ' mph';
    document.getElementById("temperature").textContent = "Temp: " + jsObject.main.temp.toFixed(0) + " °F";
                
    

  });
