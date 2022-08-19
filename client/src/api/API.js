import axios from "axios";
const BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;
const token = localStorage.getItem("token");

const fetch = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${token}` },
});

const API = {
  Register: async (values) => {
    try {
        const data = await fetch.post('/auth/register', values)
        return data
    } catch (error) {
        console.log(error)
    }
  },
};

export default API;