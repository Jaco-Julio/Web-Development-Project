import axios from 'axios';

const api = axios.create({
    baseURL: 'http://138.99.9.30:3333'
});

export default api;