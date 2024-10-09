const showDay = (day, event) => {
  if (event) event.preventDefault(); // Make sure to prevent default behavior

  const allDay = document.querySelectorAll(".day");
  const allDayBtn = document.querySelectorAll(".day-btn");

  allDayBtn.forEach((item) => {
    item.classList.remove("bg-red-600");
    item.classList.add("bg-red-500");
  });

  allDayBtn[day - 1].classList.add("bg-red-600");

  allDay.forEach((item) => {
    item.classList.add("hidden");
  });

  setTimeout(() => {
    const selectedDay = document.getElementById(`day-${day}`);
    selectedDay.classList.remove("hidden");
  }, 100);
};
