import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost/API-Rota/turismo'
});

export default api