import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-loaded.js";
import { schedulesNow } from "./show.js";

const selectedDate = document.getElementById("date");

export async function scheduleDay() {
  const date = selectedDate.value;

  const dailySchedules = await scheduleFetchByDay({ date });

  schedulesNow({ dailySchedules });

  hoursLoad({ date });
}
