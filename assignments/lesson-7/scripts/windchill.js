var tempF, speed;
tempF = (76)/ 2;
speed = 5;

var f = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF  * Math.pow(speed, 0.16);
document.getElementById("windchill").innerHTML = f.toFixed(2);
