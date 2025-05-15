import axios from "axios";

export const createBooking = async (bookingData: any) => {
  try {
    const response = await axios.post(
      "/api/bookings/create-booking",
      bookingData
    );
    return response.data;
  } catch (error) {
    console.error("Error creating booking:", error);
    throw error;
  }
};
