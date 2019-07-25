import axios from 'axios'
import md5 from 'js-md5'
import { Toast } from 'vant'
const service = axios.create({
  baseURL: process.env.VUE_APP_URL,
  withCredentials: true,
  timeout: 5000
})
console.log('share:',process.env.VUE_APP_SHARE)


// 添加拦截器
service.interceptors.request.use(function (config) {
  // 获取token
  var openid = sessionStorage.getItem('useropenid')

     var times = Date.parse(new Date());

    //  var deviceId = sessionStorage.getItem("deviceId") || ""
    //  if (deviceId == "") {
    //      // 随机10位数
    //      deviceId = Math.floor((Math.random() + Math.floor(Math.random() * 9 + 1)) * Math.pow(10, 10 - 1));
    //      sessionStorage.setItem("deviceId",deviceId)
    //  }

     var signature = `${openid}${times}`
     signature = md5(signature)
     signature = md5(signature) + "b64cf08e26f059d7682081d9050f1cc1"
     signature = md5(signature)
     //写入请求头
     config.headers['signature'] = signature
     config.headers['timestamp'] = times
     config.headers['openId'] = openid
     return config
}, function (error) {
  return Promise.reject(error)
})
service.interceptors.response.use(
  response => {
    const res = response.data
    // 请求信息超时
    if (res.code === '12') {
      // Message.error({
      //   message: res.msg,
      //   type: 'error'
      // })
      // router.push('/about')
      return response
    }
    /**
     * code为非0非12是抛错
     */
    else if (res.code !== '0' && res.code !== '12') {
      Toast(res.msg);
      // Message.error({
      //   message: res.msg,
      //   type: 'error'
      // })
      return false
    } else if (res.code === '0') {
      // Message.error({
      //   message: res.msg,
      //   type: 'success'
      // })
      return response
    }
  },
  error => {
    Toast("请求超时");
    console.log('err' + error)// for debug
    // Message({
    //   message: '请求超时',
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)

export default service
