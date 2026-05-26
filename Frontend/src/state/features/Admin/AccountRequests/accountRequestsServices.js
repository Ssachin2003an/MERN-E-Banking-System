import axios from "axios";

const API_URL =
  import.meta.env.NODE_ENV === "production" ? import.meta.env.VITE_PROD_API_URL : import.meta.env.VITE_DEV_API_URL;

const CREATE_ACCOUNT_API_URL =
  import.meta.env.NODE_ENV === "production" ? import.meta.env.VITE_PROD_API_URL : import.meta.env.VITE_DEV_API_URL;

//Get All Account Requests
const getAllAccountRequests = async (adminData) => {
  const res = await axios.get(`${API_URL}/request`, {
    headers: {
      authorization: `Bearer ${adminData.token}`,
    },
  });
  const data = res.data;

  return data;
};

//Decline Account Request
const declineAccountRequest = async (payload) => {
  const res = await axios.delete(`${API_URL}/request` + payload.id, {
    headers: {
      authorization: `Bearer ${payload.token}`,
    },
  });
  const data = res.data;

  return data;
};

//Approve Account Request (create account)
const ApproveAccountRequest = async (payload) => {
  const res = await axios.post(`${CREATE_ACCOUNT_API_URL}/account/create`, payload, {
    headers: {
      authorization: `Bearer ${payload.token}`,
    },
  });
  const data = res.data;

  return data;
};

//Logout
const adminsLogout = () => {
  return;
};

const accountRequestsServices = {
  getAllAccountRequests,
  declineAccountRequest,
  ApproveAccountRequest,
  adminsLogout,
};

export default accountRequestsServices;
