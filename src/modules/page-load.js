import { inputRefresh } from "./input-refresh";
import { scheduleDay } from "./schedules/load";

document.addEventListener("DOMContentLoaded", function () {
  scheduleDay();
  inputRefresh();
});
