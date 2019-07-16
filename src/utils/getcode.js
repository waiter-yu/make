export default {
  mounted () {
    this.wxcode = this.getUrlParam()
    // 公众号appid
    const appid = 'wx34c451c3705b3d58'
    // 服务器地址

    const redirect_uri = 'http://weixin.ydsml.com/weixin/oauth2'
    // 回调地址
    const state = 'http://weixin.ydsml.com/wx/h5/index.html'
    console.log(this.wxcode)

    if (this.wxcode == null || this.wxcode === '') {
      location.href =
          'https://open.weixin.qq.com/connect/oauth2?appid=' +
          appid +
          '&redirect_uri=' +
          redirect_uri +
          '&response_type=code&scope=snsapi_userinfo&state=' +
          state +
          '#wechat_redirect'
    }
  },
  methods: {
    getUrlParam () {
      // 封装方法
      console.log(location)

      if (location.hash == null || location.hash == '#/') {
        return null
      }
      console.log(location.hash.substr(3))

      let Base64 = require('js-base64').Base64
      var param = Base64.decode(location.hash.substr(3))
      console.log(param)

      var obj = JSON.parse(param)
      console.log(obj)

      return obj
    }
  }
}
