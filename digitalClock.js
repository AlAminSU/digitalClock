function getCurrentTimer() {
  const date = new Date();
  let Hours = date.getHours();
  const Minutes = date.getMinutes();
  const seconds = date.getSeconds();
  let midday = "AM";
  midday = Hours >= 12 ? "PM" : "AM";

  Hours = Hours > 12 ? Hours - 12 : Hours;

  updateHours = Hours < 10 ? "0" + Hours : Hours;
  updateMinutes = Minutes < 10 ? "0" + Minutes : Minutes;
  updateseconds = seconds < 10 ? "0" + seconds : seconds;

  let time =
    updateHours + ":" + updateMinutes + ":" + updateseconds + ":" + midday;

  document.getElementById("clock").innerText = time;
  const timer = setTimeout(function () {
    getCurrentTimer();
  }, 1000);
}

getCurrentTimer();
