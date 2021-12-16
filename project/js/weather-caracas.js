const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=3646738&appid=6eaafa6a5e118a5a4624a2623c1868e4";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    //convertion from Kelvin to Farenheit
    let tempK = jsObject.main.temp_max;
    let tempF = fromKtoF(tempK);
    function fromKtoF(tempKelvin) {
      return Math.round(tempKelvin * (9 / 5) - 459.67);
    }

    // display the Preston weather sumary to the user
    document.getElementById("weatherdesc").textContent =
      "Currently: " + jsObject.weather[0].description;
    document.getElementById("humidity").textContent =
      "Humidity: " + jsObject.main.humidity + " %";
    document.getElementById("windspeed").textContent =
      "Wind Speed: " + jsObject.wind.speed + " mph";
    document.getElementById("temperature").textContent =
      "High: " + tempF.toFixed(0) + " °F";

    //wind shill calculation
    let s = jsObject.wind.speed;
    let t = tempF;
    let f = 35.47 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * s ** 0.16;
    document.getElementById("windshill").innerHTML =
      "Wind Shill: " + f.toFixed(0) + " °F";
  });