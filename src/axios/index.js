import axios from 'axios';
//添加一个请求拦截器
axios.interceptors.request.use(function (config) {
    if(process.env.API){
        config.url = config.url + process.env.API
    }
    console.log(config);
    const {method} = config;
    if(sessionStorage.getItem('Authorization')){
        config.headers['Authorization'] = sessionStorage.getItem('Authorization');
    }
    if(method === "post") {
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
