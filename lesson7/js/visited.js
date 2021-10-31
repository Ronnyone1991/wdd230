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
  let last = localStorage.getItem("visitedLast");
  let now = localStorage.getItem("visitedToday");
  // console.log(last)
  // console.log(now)

  let difference = now - last;

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
