import axios from "axios";

const API_URL =
  (import.meta.env.NODE_ENV === "production" ? import.meta.env.VITE_PROD_API_URL : import.meta.env.VITE_DEV_API_URL) + "/users/";

//Login User
const login = async (userData) => {
  const res = await axios.post(API_URL + "login", userData, {
    headers: {
      "content-type": "application/json",
    },
  });
  const data = res.data;

  return data;
};
const register = async (userData) => {
  try {
    
    const res = await axios.post(`${API_URL}/users/register`, userData, {
      headers: {
        "content-type": "application/json",
      },
    });
    console.log("NODE_ENV:", import.meta.env.VITE_NODE_ENV);
    console.log("PROD_API_URL:", import.meta.env.VITE_PROD_API_URL);
    console.log("DEV_API_URL:", import.meta.env.VITE_DEV_API_URL);
    console.log("FINAL API_URL:", API_URL);
    return res.data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

//Logout
const logout = () => {
  return;
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
