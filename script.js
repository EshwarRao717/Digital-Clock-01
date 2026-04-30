const time = document.getElementById("time");
const ampm = document.getElementById("ampm");
const day = document.getElementById("day");
const date = document.getElementById("date");
const zone = document.getElementById("zone");
const greeting = document.getElementById("greeting");
const progress = document.getElementById("progress");
const seconds = document.getElementById("seconds");

const formatBtn = document.getElementById("formatBtn");
const themeBtn = document.getElementById("themeBtn");

let is24Hour = true;

function updateClock(){

const now = new Date();

let hr = now.getHours();
let min = now.getMinutes();
let sec = now.getSeconds();

let period = "";

if(!is24Hour){
period = hr >= 12 ? "PM" : "AM";
hr = hr % 12 || 12;
}

hr = String(hr).padStart(2,"0");
min = String(min).padStart(2,"0");
sec = String(sec).padStart(2,"0");

time.innerText = `${hr}:${min}:${sec}`;
ampm.innerText = is24Hour ? "" : period;
seconds.innerText = sec;

/* Date */

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

day.innerText = days[now.getDay()];
date.innerText = `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;

zone.innerText = Intl.DateTimeFormat().resolvedOptions().timeZone;

/* Greeting */

let realHour = now.getHours();

if(realHour < 12){
greeting.innerText = "Good Morning ☀️";
}
else if(realHour < 18){
greeting.innerText = "Good Afternoon 🌤️";
}
else{
greeting.innerText = "Good Evening 🌙";
}

/* Progress Ring */

let offset = 345 - (sec / 60) * 345;
progress.style.strokeDashoffset = offset;

}

setInterval(updateClock,1000);
updateClock();

/* Format Toggle */

formatBtn.onclick = () => {
is24Hour = !is24Hour;
formatBtn.innerText = is24Hour ? "24H" : "12H";
updateClock();
};

/* Theme Toggle */

themeBtn.onclick = () => {
document.body.classList.toggle("light");
themeBtn.innerText =
document.body.classList.contains("light") ? "🌙" : "☀️";
};