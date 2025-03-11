import { scheduleCancel } from "../../services/schedule-cancel.js";
import { scheduleDay } from "./load.js";

const periods = document.querySelectorAll(".period");

periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      const item = event.target.closest("li");
      const { id } = item.dataset;

      if (id) {
        const userConfirmation = confirm(
          "Do you want to delete this appointment?"
        );
        if (userConfirmation) {
          await scheduleCancel({ id });
          scheduleDay();
        }
      }
    }
  });
});
