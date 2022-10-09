function getCurrentTimer() {
  const date = new Date();
  let Hours = date.getHours();
  const Minutes = date.getMinutes();
  const seconds = date.getSeconds();

  Hours = Hours > 12 ? Hours - 12 : Hours;

  formattedHours = Hours > 10 ? Hours : "0" + Hours;
  formattedMinutes = Minutes > 10 ? Minutes : "0" + Minutes;
  formattedseconds = seconds > 10 ? seconds : "0" + seconds;
  //   formattedHours = updateTime(formattedHours);
  //   formattedMinutes = updateTime(formattedMinutes);
  //   formattedseconds = updateTime(formattedseconds);
  document.getElementById("clock").innerText =
    formattedHours + ":" + formattedMinutes + ":" + formattedseconds;
  const timer = setTimeout(function () {
    getCurrentTimer();
  }, 1000);
}

getCurrentTimer();
