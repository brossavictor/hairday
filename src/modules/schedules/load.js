import { hoursLoad } from "../form/hours-loaded";

const selectedDate = document.getElementById("date");

export function scheduleDay() {
  const date = selectedDate.value;

  hoursLoad({ date });
}
