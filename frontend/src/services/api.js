import axios from "axios";

const api = axios.create({ baseURL:'http://localhost:3005/', withCredentials:true });

api.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

export default api;