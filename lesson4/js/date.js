// return the day of the week
let now = new Date();
let weekday = new Array();
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

// return the name of the moth
let month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";


let n = weekday[now.getDay()];
let monthday = now.getUTCDate();
let m = month[now.getMonth()];
let year = now.getFullYear();
document.getElementById("date").innerHTML = n + ", " + monthday + " " +m + " " + year;