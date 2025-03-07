import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new.js";

const form = document.querySelector("form");
const customer = document.getElementById("customer");
const selectedDate = document.getElementById("date");

const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    const name = customer.value.trim();
    if (!name) {
      return alert("State customer's name.");
    }

    const hourSelected = document.querySelector(".hour-selected");
    if (!hourSelected) {
      return alert("Select a valid schedule.");
    }
    const [hour] = hourSelected.innerText.split(":");

    const when = dayjs(selectedDate.value).add(hour, "hour");

    const id = new Date().getTime();

    await scheduleNew({
      id,
      name,
      when,
    });
  } catch (error) {
    alert("Something went wrong.");
    console.log(JSON.stringify(error));
  }
};
