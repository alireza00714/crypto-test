import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://publicapi.ramzinex.com/exchange/api/v1.0/exchange",
  timeout: 5000,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      // do something for 401
    }
    return Promise.reject(error);
  }
);
