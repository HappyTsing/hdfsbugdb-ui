import axios from "axios";
// 使用ElMessage需要手动导入样式
import { ElMessage } from "element-plus";
import "element-plus/es/components/message/style/css";

// import store from "@/store";
// import { getToken } from "@/utils/auth";

// 创建实例、配置基础URL
const service = axios.create({
  baseURL: "/hdfsbugdb-server/api",
  timeout: 10000, // request timeout
});

// 拦截请求，将token带到请求体
/*
service.interceptors.request.use(
  (config) => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers["X-Token"] = getToken();
    }
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);
*/

// 响应拦截
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data;
    // 没有code，或默认为200
    const code = res.code || 200;
    // code 不等于200报错
    if (code != 200) {
      ElMessage.error(res.message || "Request API Error");
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      // code 等于200返回，注意返回的是res.data
      return res;
    }
  },
  (error) => {
    console.log("err" + error); // for debug
    ElMessage({
      message: error.message,
      type: "error",
      duration: 3000,
    });
    return Promise.reject(error);
  }
);

export default service;
