import axios from "axios";
//url
import { API_URL } from "../config";
//context
import { useStore } from "../store/auth";



const authApi = axios.create({
    baseURL:API_URL,
    //withCredentials: true
});

authApi.interceptors.request.use(config => {
    const token = useStore.getState().token
    config.headers = {
        Authorization: `Bearer ${token}`
    };
    return config;
})

export default authApi;