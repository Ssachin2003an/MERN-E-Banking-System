import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_PROD_API_URL
    : import.meta.env.VITE_DEV_API_URL;

const API_URL = `${BASE_URL}/admins`;

// Login Admin
const adminLogin = async (adminData) => {
  try {
    const res = await axios.post(
      `${API_URL}/login`,
      adminData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.data) {
      localStorage.setItem("admin", JSON.stringify(res.data));
    }

    return res.data;
  } catch (error) {
    console.log(
      "Admin Login Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Logout
const adminLogout = () => {
  localStorage.removeItem("admin");
};

// Get Admin
const getAdmin = async (adminData) => {
  const res = await axios.get(
    `${API_URL}/${adminData.id}`,
    {
      headers: {
        authorization: `Bearer ${adminData.token}`,
      },
    }
  );

  return res.data;
};

// Update Admin
const updateAdmin = async (adminData) => {
  const res = await axios.put(
    `${API_URL}/${adminData.id}`,
    adminData,
    {
      headers: {
        authorization: `Bearer ${adminData.token}`,
      },
    }
  );

  return res.data;
};

const adminAuthServices = {
  adminLogin,
  adminLogout,
  getAdmin,
  updateAdmin,
};

export default adminAuthServices;