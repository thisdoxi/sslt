import axios from 'axios'

export function request(config){
    // 1.创建axios实例
    const instance=axios.create({
        baseURL:'http://152.136.185.210:7878/api/m5',
        timeout:5000
    })
    // ----------------------------------------------------------------
    // 2.axios拦截器
    instance.interceptors.request.use(aaa=>{//请求
        return aaa
    },err=>{
        console.log(err);
    })
    instance.interceptors.response.use(res=>{//响应
        return res.data
    },err=>{
        console.log(err);
    })
    // ----------------------------------------------------------------
    // 3.发送真正的网络请求
    return instance(config)
}