import axios from "axios";
const BASE_URL = "http://demo.itlike.com/web/xlmc";

export function request(config) {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
  });

  instance.interceptors.request.use(
    function(config) {
      // 在发送请求之前做些什么
      return config;
    },
    function(error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    }
  );
  instance.interceptors.request.use(
    function(config) {
      // 在发送请求之前做些什么
      return config;
    },
    function(error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    }
  );
  return instance(config);
}
