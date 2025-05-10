import axios from "axios";

export const registerUser = async (data: never) => {
  try {
    console.log("Registering user with data:", data);
    const response = await axios.post("/api/users/register", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};
export const loginUser = async (data: never) => {
  try {
    const response = await axios.post("/api/users/login", data);
    return response.data;
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await axios.get("/api/users/current-user");
    return response.data;
  } catch (error) {
    console.error("Error fetching current user:", error);
    throw error;
  }
};
