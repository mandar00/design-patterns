import axios from "axios";

const axiosParams = {
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Origin": "*",
  },
  // Base URL should be set via environment
  baseURL:
    process.env.NODE_ENV === "development" ? "http://localhost:8080" : "/",
};

const axiosInstance = axios.create(axiosParams);

const api = (axios) => {
  //additional headers can be passed in config
  return {
    get: (url, body = null, config = {}) => axios.get(url, config),
    delete: (url, body = null, config = {}) => axios.delete(url, config),
    post: (url, body, config = {}) => axios.post(url, body, config),
    patch: (url, body, config = {}) => axios.patch(url, body, config),
    put: (url, body, config = {}) => axios.put(url, body, config),
  };
};
export default api(axiosInstance);
