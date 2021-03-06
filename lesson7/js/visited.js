const daysSinceLastVisit = document.querySelector("#visited");

let PassedDays = 0;
let visitedLast;
let visitedToday = new Date();

const populateStorage = () => {
  localStorage.setItem("visitedLast", visitedToday.getTime());
  localStorage.setItem("visitedToday", visitedToday.getTime());
};

const setNewDate = () => {
  localStorage.setItem("visitedToday", visitedToday.getTime());
  PassedDays = calculateDays();
};

const calculateDays = () => {
  let lastVisit = localStorage.getItem("visitedLast");
  let nowVisit = localStorage.getItem("visitedToday");

  let difference = nowVisit - lastVisit;

  PassedDays = difference / (1000 * 3600 * 24);
  PassedDays = Math.round(PassedDays);
  return PassedDays;
};

if (!localStorage.getItem("visitedLast")) {
  populateStorage();
  PassedDays = calculateDays();
} else {
  setNewDate();
}

daysSinceLastVisit.innerHTML = "Last visit: " + PassedDays;

localStorage.setItem("visitedLast", visitedToday.getTime());
