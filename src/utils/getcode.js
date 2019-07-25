import axios from '@/utils/clerk'
export default {
  mounted() {

    this.wxcode = this.getUrlParam()

    if (this.wxcode == null || this.wxcode === '') {

      axios.post('/client/weixin/getWxCodeUrl', { state: process.env.VUE_APP_SHARE }).then(res => {

        location.href = res.data.data.codeUrl
      })
    } else {
      console.log(this.wxcode);
      sessionStorage.setItem("useropenid", this.wxcode.openId)
    }

    // this.wxcode.
  },
  methods: {
    getUrlParam() {
      // 封装方法
      console.log(location)

      if (location.search == null || location.search == '' || location.search.indexOf("json=") == -1) {
        return null
      }
      // console.log('param:9999',JSON.parse(unescape(location.search.substr(6))))

      // let param = decodeURIComponent(location.search.substr(6))
      let param = unescape(location.search.substr(6))
      var obj = JSON.parse(param)
      return obj
    }
  }
}
