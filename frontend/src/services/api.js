import axios from "axios";
import { getUserLocalStorage } from "../contexts/Storage";

const api = axios.create({ baseURL:'http://localhost:3005/' });

api.interceptors.request.use(
    (config) => {
        const user = getUserLocalStorage()
        config.headers.Authorization = user?.id;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default api;