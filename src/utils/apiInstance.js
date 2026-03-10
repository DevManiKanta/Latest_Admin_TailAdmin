import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.1.9:8000/api/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// request interceptor
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default API;