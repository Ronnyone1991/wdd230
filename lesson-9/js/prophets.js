const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const president = jsonObject["prophet"];
    president.forEach((president) => {
      // create elements
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let birthday = document.createElement("p");
      let birthplace = document.createElement("p");
      let img = document.createElement("img");

      // add JSON data and display it to the user
      h2.textContent = `${president.name} ${president.lastname}`;
      birthday.textContent = `Date of Birth: ${president.birthdate}`;
      birthplace.textContent = `Place of Birth: ${president.birthplace}`;
      img.setAttribute("src", president.imageurl);
      img.setAttribute(
        "alt",
        `${president.name} ${president.lastname} - ${president.order}`
      );

      card.appendChild(h2);
      card.appendChild(birthday);
      card.appendChild(birthplace);
      card.appendChild(img);
      document.querySelector(".cards").appendChild(card);
    });
  });

function view() {
  document.getElementsByClassName('cards')[0].setAttribute('class', 'new');
}

function cards() {
  document.getElementsByClassName('new')[0].setAttribute('class', 'cards');
}

