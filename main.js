function updateDateTime() {
  const currentDayOfTheWeek = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );
  const currentUTCTime = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );
  const date = new Date();

  const dayOfTheWeek = date.toLocaleString("en-us", { weekday: "long" });
  const utcTime = date.getTime();

  currentDayOfTheWeek.textContent = dayOfTheWeek;
  currentUTCTime.textContent = utcTime;

  requestAnimationFrame(updateDateTime);
}

updateDateTime();
