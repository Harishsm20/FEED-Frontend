// src/services/profileService.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/profile";

export const fetchProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}/me`, {
      withCredentials: true,
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const checkUsernameAvailability = async (username) => {
  try {
    const response = await axios.post(
      `${API_URL}/check-username`,
      { username },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const updateProfile = async (profileData) => {
  try {
    const response = await axios.put(`${API_URL}/me`, profileData, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
