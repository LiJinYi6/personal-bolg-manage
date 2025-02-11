import axios from "axios"
import { ElMessage } from "element-plus"
let request=axios.create({
    baseURL:import.meta.env.VITE_APP_BASE_API,
    timeout:50000000
})
//请求拦截器
request.interceptors.request.use((config)=>{
    //headers,给服务器带公共参数
    config.headers.token='token'
    //返回配置对象
    return config
})
//响应拦截器
request.interceptors.response.use((response)=>{
    //成功回调
    return response.data
},(error)=>{
    //失败回调，处理网络错误
    //定义一个变量用于存储网络错误信息
    console.log('错误',error)
    let msg:string="";
    let status=error.response.status;
    switch(status){
        case 401:
            msg="token过期"
            break;
        case 403:
            msg="无权限"
            break;
        case 404:
            msg="token过期"
            break;
        default:
            msg="网络过期"
            break;
    }
    ElMessage({
        type:'error',
        message:msg,
    })
    //返回一个错误的promise对象
    return Promise.reject(error)
})

export default request