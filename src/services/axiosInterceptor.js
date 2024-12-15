import axios from "axios";

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_QURAN_API,
});

apiInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

apiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Response Error:", error);

    if (error.response?.status === 401) {
      console.error("Unauthorized. Redirecting to login...");
    }
    return Promise.reject(error);
  }
);

export default apiInstance;
