import { message } from "antd";
import axios from "axios";

export const createEvent = async (eventData: any) => {
  try {
    console.log("Event data:", eventData);
    const response = await axios.post("/api/events/create-event", eventData, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    message.success("Event created successfully");
    return response.data;
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
};
