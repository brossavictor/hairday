import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours");

export function hoursLoad({ date, dailySchedules }) {
  hours.innerHTML = "";

  const unavailableHours = dailySchedules.map((schedule) =>
    dayjs(schedule.when).format("HH:mm")
  );

  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":");

    const isOntime = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

    const available = !unavailableHours.includes(hour) && isOntime;

    return {
      hour,
      available,
    };
  });

  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li");

    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");

    li.textContent = hour;

    if (hour === "9:00") {
      hourHeaderAdd("Morning");
    } else if (hour === "13:00") {
      hourHeaderAdd("Afternoon");
    } else if (hour === "18:00") {
      hourHeaderAdd("Night");
    }

    hours.append(li);
  });

  hoursClick();

  function hourHeaderAdd(title) {
    const header = document.createElement("li");

    header.classList.add("hour-period");
    header.textContent = title;

    hours.append(header);
  }
}
