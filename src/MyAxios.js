import axios from 'axios';

const myAxios = axios.create({baseURL:"https://foodpanda-backend.vercel.app/api/v1/"})
// Add a request interceptor
myAxios.interceptors.request.use(function (config) {
    let user = JSON.parse(localStorage.getItem("user"))

    if(user && user?.accessToken){
      config.headers.Authorization = `Bearer ${user?.accessToken}`;    
    }

    return config;
});

export default myAxios
