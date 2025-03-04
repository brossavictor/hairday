import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours";

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":");

    const isOntime = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

    return {
      hour,
      available: isOntime,
    };
  });
}
