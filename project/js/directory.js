const requestURL =
  "https://ronnyone1991.github.io/wdd230/project/json/directory.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const busisnes = jsonObject["busisness"];
    busisnes.forEach((busisnes) => {
      // create elements
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let contact = document.createElement("p");
      let web = document.createElement("p");
      let img = document.createElement("img");
      

      // add JSON data and display it to the user
      h2.textContent = `${busisnes.name}`;
      contact.textContent = `Contact Numer: ${busisnes.number}`;
      web.textContent = `Web site: ${busisnes.website}`;
      img.setAttribute("src", busisnes.imageurl);
      img.setAttribute("alt", 'picture of the logo of the company');

      card.appendChild(h2);
      card.appendChild(contact);
      card.appendChild(web);
      card.appendChild(img);
      document.querySelector(".card").appendChild(card);
    });
  });