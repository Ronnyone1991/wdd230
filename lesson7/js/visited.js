const daysSinceLastVisit = document.querySelector("#visited");

let daysPassed = 0;
let visitedLast;
let visitedToday = new Date();

const populateStorage = () => {
  localStorage.setItem("visitedLast", visitedToday.getTime());
  localStorage.setItem("visitedToday", visitedToday.getTime());
};

const setNewDate = () => {
  localStorage.setItem("visitedToday", visitedToday.getTime());
  daysPassed = calculateDays();
};

const calculateDays = () => {
  let lastVisit = localStorage.getItem("visitedLast");
  let nowVisit = localStorage.getItem("visitedToday");

  let difference = nowVisit - lastVisit;

  daysPassed = difference / (1000 * 3600 * 24);
  daysPassed = Math.round(daysPassed);
  return daysPassed;
};

if (!localStorage.getItem("visitedLast")) {
  populateStorage();
  daysPassed = calculateDays();
} else {
  setNewDate();
}

daysSinceLastVisit.innerHTML = "Last visit: " + daysPassed;

localStorage.setItem("visitedLast", visitedToday.getTime());
