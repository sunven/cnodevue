//axios 封装
import axios from 'axios'

//全局的 axios 默认值
axios.defaults.baseURL = "https://cnodejs.org/api/v1";

//请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // const token = cookie.getToken();
  // if (token != null) {
  //     config.headers.common['Authorization'] = ` Bearer ${token}`
  // }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
//响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么

  return response
}, function (error) {
  // 对响应错误做点什么

  return Promise.reject(error);
});

export default axios
