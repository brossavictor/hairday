import { apiConfig } from "./api-config.js";

export async function scheduleCancel({ id }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    });
    alert("Appointment cancelled.");
  } catch (error) {
    alert("Something went wrong.");
    console.log(error);
  }
}
