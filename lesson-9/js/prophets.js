const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const prophet = jsonObject["prophets"];
    prophet.forEach((prophet) => {
      // create elements
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let img = document.createElement("img");
      let birthday = document.createElement("p");
      let birthplace = document.createElement("p");

      // add JSON data and display it to the user
      h2.textContent = `${prophet.name} ${prophet.lastname}`;
      birthday.textContent = `Date of Birth: ${prophet.birthdate}`;
      birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
      img.setAttribute("src", prophet.imageurl);
      img.setAttribute(
        "alt",
        `${prophet.name} ${prophet.lastname} - ${prophet.order}`
      );

      card.appendChild(h2);
      card.appendChild(birthday);
      card.appendChild(birthplace);
      card.appendChild(img);
      document.querySelector(".cards").appendChild(card);
    });
  });
