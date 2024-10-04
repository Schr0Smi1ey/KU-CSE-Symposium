// Event date
const eventDate = new Date("November 08, 2024 00:00:00").getTime();

// Update countdown every second
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display the countdown timer
  document.getElementById("days").setAttribute("style", `--value:${days}`);
  document.getElementById("hours").setAttribute("style", `--value:${hours}`);
  document
    .getElementById("minutes")
    .setAttribute("style", `--value:${minutes}`);
  document
    .getElementById("seconds")
    .setAttribute("style", `--value:${seconds}`);

  // Countdown has ended
  if (timeLeft < 0) {
    clearInterval(countdown);
    document.getElementById("days").textContent = "0";
    document.getElementById("hours").textContent = "0";
    document.getElementById("minutes").textContent = "0";
    document.getElementById("seconds").textContent = "0";
  }
}, 1000);
