function getCurrentTimer() {
  const date = new Date();
  let Hours = date.getHours();
  const Minutes = date.getMinutes();
  const seconds = date.getSeconds();
  let midday = "AM";
  midday = Hours >= 12 ? "PM" : "AM";

  Hours = Hours > 12 ? Hours - 12 : Hours;

  formattedHours = Hours < 10 ? "0" + Hours : Hours;
  formattedMinutes = Minutes < 10 ? "0" + Minutes : Minutes;
  formattedseconds = seconds < 10 ? "0" + seconds : seconds;

  let time =
    formattedHours +
    ":" +
    formattedMinutes +
    ":" +
    formattedseconds +
    ":" +
    midday;

  document.getElementById("clock").innerText = time;
  const timer = setTimeout(function () {
    getCurrentTimer();
  }, 1000);
}

getCurrentTimer();
