import wx from 'weixin-js-sdk'
var href = window.location.href
const that = this
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
var params = new URLSearchParams()
params.append('url', href)
axios({
  method: 'post',
  url: '/share',
  data: params
})
  .then(res => {
    wxshare(res.data, '')
  })

export const wxshare = (data, url) => {
  var url = window.location.href
  var appId = data.data.appid
  var timestamp = data.data.timestamp
  var nonceStr = data.data.nonceStr
  var signature = data.data.signature
  wx.config({
    beta: true,
    debug: false,
    appId: appId,
    timestamp: timestamp,
    nonceStr: nonceStr,
    signature: signature,
    jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline']
  })

  wx.ready(function () {
    // 分享朋友圈
    wx.onMenuShareTimeline({
      title: titles,
      desc: descs,
      link: window.location.href,
      imgUrl: imgurls,
      success: function () {

      },
      cancel: function () {

      }
    })
    // 分享好友
    wx.onMenuShareAppMessage({
      title: titles,
      desc: descs,
      link: url,
      imgUrl: imgurls,
      type: '',
      dataUrl: '',
      success: function () {
      },
      cancel: function () {

      }
    })
  })
}
