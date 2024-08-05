import axios from "axios";
import { store } from "../../redux/Store";
import { selectCurrentUser } from "../../redux/slices/user.slice";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10 * 60 * 60 * 1000,
  // headers: {
  //   Accept: "application/json",
  //   "Content-Type": "application/json",
  // },
});
axiosInstance.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const { token } = selectCurrentUser(state);
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}` ;
    }

    const { contentType } = config.headers;

    if (contentType) {
      config.headers["Content-Type"] = contentType;
    } else {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
