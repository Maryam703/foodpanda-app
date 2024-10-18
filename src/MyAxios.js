import axios from 'axios';

const myAxios = axios.create({baseURL:"http://localhost:7000/api/v1"})
// Add a request interceptor
myAxios.interceptors.request.use(function (config) {
    const user = JSON.parse(localStorage.getItem("user"))
    config.headers.Authorization = user.accessToken;

    return config;
});

export default myAxios
