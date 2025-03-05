import { hoursLoad } from "./form/hours-loaded";

export function inputRefresh() {
  const selectedDate = document.getElementById("date");

  selectedDate.addEventListener("change", function () {
    const date = selectedDate.value;
    const timetable = document.querySelectorAll(".hour, .hour-period");

    timetable.forEach((element) => {
      element.remove();
    });

    hoursLoad(date);

    /* console.log(timetable);
    console.log(date); */
  });
}
