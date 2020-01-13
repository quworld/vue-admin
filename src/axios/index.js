import axios from 'axios';
import qs from 'qs';
//添加一个请求拦截器
axios.interceptors.request.use(function (config) {
    const {method} = config;
    if(localStorage.getItem('Authorization')){
        config.headers['Authorization'] = localStorage.getItem('Authorization');
    }
    if(method === "post") {
        config.data = qs.stringify(config.data);
        config.headers['Content-Type'] = 'application/json';

    }
    return config;
}, (error) => {
    return Promise.reject(error);
});
//添加一个响应拦截器
axios.interceptors.response.use((res) => {
    return res.data;
}, (error) => {
    return Promise.reject(error);
});

export default axios;
