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
  Login: async (values) => {
    try {
      const data = await fetch.post('/auth/login', values)
      return data
    } catch (error) {
      console.log(error) 
    }
  },
  Auth: async (values) => {
    try {
      const data = await fetch.get('/auth/me', {
        headers: {
          Authorization: `Bearer ${values}`
        }
      })
      return data
    } catch (error) {
      console.log(error)
    }
  },
  DeleteProduct: async (id) => {
    try {
      const remove = await fetch.delete(`/products/${id}`)
      return remove
    } catch (error) {
      return error
    }
  }
};

export default API;
