let t = 54;
let s = 12;
let f = 35.47 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * s ** 0.16;
let result = f.toFixed(0);
document.getElementById("wind").innerHTML = result + " " + "°F";