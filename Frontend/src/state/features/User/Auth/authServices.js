import axios from "axios";

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://ebank-2t3r.onrender.com/api/users/"
    : "https://mern-e-banking-system.onrender.com/api/users/";

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

//Register User
// const register = async (userData) => {
//   const res = await axios.post(API_URL + "register", userData, {
//     headers: {
//       "content-type": "application/json",
//     },
//   });

//   const data = res.data;

//   return data;
// };
const register = async (userData) => {
  const res = await axios.post(API_URL + "register", userData, {
    headers: {
      "content-type": "application/json",
    },
  });
  return res.data;
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
