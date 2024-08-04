import _axios from "axios";

const axios = _axios.create();

axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;

axios.interceptors.request.use((request) => {
  if (localStorage.getItem("auth")) {
    request.headers.Authorization = `Bearer ${localStorage.getItem("auth")}`;
  }
  return request;
});

export const get = axios.get.bind(axios);
export const post = axios.post.bind(axios);
