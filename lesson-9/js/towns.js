const townsRequestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(townsRequestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const town = jsonObject["towns"];
    const listTown = ["Soda Springs", "Fish Haven", "Preston"];

    for (let count = 0; count < town.length; count++) {
      if (listTown.includes(town[count].name)) {
        let imgTown;
        switch (town[count].name) {
          case "Soda Springs":
            imgTown = "./images/sodaspring.jpg";
            break;
          case "Fish Haven":
            imgTown = "./images/fishheaven.jpg";
            break;
          case "Preston":
            imgTown = "./images/preston.jpg";
            break;
        }

        let townjson = document.createElement("section");
        let h1 = document.createElement("h1");
        let h3 = document.createElement("h3");
        let img = document.createElement("img");
        let yearf = document.createElement("p");
        let population = document.createElement("p");
        let annualRain = document.createElement("p");

        h1.textContent = `${town[count].name}`;
        h3.textContent = `${town[count].motto} `;
        yearf.textContent = `Year Founded: ${town[count].yearFounded}`;
        population.textContent = `Current Population: ${town[count].currentPopulation}`;
        annualRain.textContent = `Annual Rain Fall: ${town[count].averageRainfall}`;
        img.setAttribute("src", imgTown);
        img.setAttribute("alt", `${town[count].name} `);
        townjson.appendChild(h1);
        townjson.appendChild(h3);
        townjson.appendChild(yearf);
        townjson.appendChild(population);
        townjson.appendChild(annualRain);
        townjson.appendChild(img);
        document.querySelector(".towns").appendChild(townjson);
      }
    }
  });
