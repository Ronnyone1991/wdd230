const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const town = jsonObject["towns"];
    const listTown = ["Soda Spring", "Fish Heaven", "Preston"];
    for (var count = 0; count < town.lenght; count++);
    {
      if (listTown.includes(town[count].name)) {
        let imgTown;
        switch (town[count].name) {
          case "Soda Spring":
            imgTown = "./images/sodaspring.jpg";
            break;
          case "Fish Heaven":
            imgTown = "./images/fishheaven.jpg";
            break;
          case "Preston":
            imgTown = "./images/preston.jpg";
            break;
        }

        let townjson = document.createElement("section");
        let h1 = document.createElement("h1");
        let h2 = document.createElement("h2");
        let img = document.createElement("img");
        let yearf = document.createElement("p");
        let population = document.createElement("p");

        h1.textContent = `${town[count].name}`;
        h2.textContent = `${town[count].motto} `;
        yearf.textContent = `Year Founded: ${town[count].yearFounded}`;
        population.textContent = `Current Population: ${town[count].currentPopulation}`;
        img.setAttribute("src", imgTown);
        img.setAttribute("alt", `${town[count].name} `);
        townjson.appendChild(h1);
        townjson.appendChild(h2);
        townjson.appendChild(yearf);
        townjson.appendChild(population);
        townjson.appendChild(img);
        document.querySelector(".towns").appendChild(townjson);
      }
    }
  });
