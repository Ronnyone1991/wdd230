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
      "Weather condition: " + jsObject.weather[0].description;
    document.getElementById("humidity").textContent =
      "Humidity: " + jsObject.main.humidity + " %";
    document.getElementById("temperature").textContent =
      "Temp: " + tempF.toFixed(0) + " °F";
  });

  const forecastURL =
    "https://api.openweathermap.org/data/2.5/forecast?id=3646738&appid=6eaafa6a5e118a5a4624a2623c1868e4";
  fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
      function fromKtoF(tempKelvin) {
        return Math.round(tempKelvin * (9 / 5) - 459.67);
      }

      const currentDate = new Date(jsObject.list[0].dt_txt);
      var today = currentDate.getDay();
      let int = today;
      let dayOfTheWeek;
      let days = document.querySelectorAll(".dayWeek");
      let DaysOfweek = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesay",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
      };

      days.forEach((day) => {
        Object.keys(DaysOfweek).forEach((day) => {
          if (int > 6) {
            int = 0;
          }
          if (day == int) {
            dayOfTheWeek = DaysOfweek[int];
          }
        });
        day.innerHTML = dayOfTheWeek;
        int++;
      });
      const imagesOfweek = document.querySelectorAll(".imgweek");
      const weeklyTemp = document.querySelectorAll(".tempweek");
      let count = 0;

      jsObject.list.forEach((item, i) => {
        let itemDate = new Date(item.dt_txt);
        let Now = itemDate.getHours();

        if (Now == 18) {
          let weatherOfweek = fromKtoF(jsObject.list[i].main.temp);
          weeklyTemp[count].innerHTML = weatherOfweek + "°F";
          let imagesrc =
            "https://openweathermap.org/img/w/" +
            jsObject.list[i].weather[0].icon +
            ".png";
          imagesOfweek[count].setAttribute("src", imagesrc);
          count++;
        }
      });
      for (inter = today, geo = 0; geo < imagesOfweek.length; geo++, inter++) {
        if (inter > 6) {
          inter = 0;
        }
        var index = geo + today;
        if (index > 6) {
          index = 0;
        }
        imagesOfweek[geo].setAttribute(
          "alt",
          "An image for " + DaysOfweek[index] + " weather condition"
        );
      }
    });