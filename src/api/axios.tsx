import axios from "axios";
import { ReactNode, useEffect } from "react";

const axiosInstance = axios.create({
  baseURL: "https://api.yourdomain.com", // Replace with your API base URL
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Perform actions before request is sent, like setting auth headers
    // config.headers.Authorization = `Bearer ${yourAuthToken}`;
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

export const AxiosHandler = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const setupInterceptors = () => {
      const responseInterceptor = axiosInstance.interceptors.response.use(
        (response) => {
          return response;
        },
        (error) => {
          return Promise.reject(error);
        }
      );

      return responseInterceptor;
    };

    const interceptorId = setupInterceptors();

    return () => {
      axiosInstance.interceptors.response.eject(interceptorId);
    };
  }, []);

  return <>{children}</>;
};

export default axiosInstance;
