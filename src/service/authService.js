// src/service/authService.js
import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = 'http://localhost:5000/api/auth';

// Login Function
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password }, { withCredentials: true });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Signup Function
export const signup = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, formData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Google Authentication
export const googleAuth = () => {
  window.location.href = `${API_URL}/google`;
};

// Verify Token Function
export const verifyToken = async () => {
  try {
    console.log("verify token")
    const response = await axios.get(`${API_URL}/verify-token`, { withCredentials: true });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Logout Function
export const logout = async () => {
  try {
    const response = await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
    Cookies.remove('jwt');
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Handing Token
export const getToken = () => {
  const token = Cookies.get('jwt');
  return token;
};
