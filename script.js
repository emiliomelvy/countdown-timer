const newYear = "6 Jul 2022";
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("minutes");
const sec = document.getElementById("seconds");

let countdown = () => {
  let newYearsDate = new Date(newYear);
  let currentDate = new Date();
  const seconds = (newYearsDate - currentDate) / 1000;

  let daysLeft = Math.floor(seconds / 60 / 60 / 24);
  let hoursLeft = Math.floor(seconds / 60 / 60) % 24;
  let minsLeft = Math.floor(seconds / 60) % 60;
  let secondsLeft = Math.floor(seconds % 60);

  days.innerText = formatTime(daysLeft);
  hours.innerText = formatTime(hoursLeft);
  mins.innerText = formatTime(minsLeft);
  sec.innerText = formatTime(secondsLeft);
};

let formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

countdown();
setInterval(countdown, 1000);
