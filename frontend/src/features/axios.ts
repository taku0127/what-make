// axios.js
import Axios from "axios";

const axios = Axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    withXSRFToken: true, // これを追加
})

export default axios
