import Clerk from '../utils/clerk'

export const share0peration=async(title='《七夕告白》有奖活动',desc='邀请您一起来竞猜祝福、偷瞄情话、测算姻缘！',link=process.env.VUE_APP_SHARE,imgUrl='http://wx.ydsml.com/make/img/home_bg@2x.f8d0920d.png')=>{
  const requestUrl= 'client/weixin/wxShare?url='+encodeURIComponent(window.location.href)
  const response=await Clerk({methods:'GET',url:requestUrl})

  if(response.data)
  {
    const {appId,timestamp,nonceStr,signature,url}=response.data.data
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
      wx.updateAppMessageShareData({
        title:title, // 分享标题
        desc: desc, // 分享描述
        // link: window.location.hostname+window.location.pathname, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        link:link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: imgUrl, // 分享图标
        success: function () {

          // this.isShow=false
// 用户点击了分享后执行的回调函数
        },
        cancel: function (error) {
        }
      });





      wx.onMenuShareAppMessage({
        title: title, // 分享标题
        desc: desc, // 分享描述
        // link: window.location.hostname+window.location.pathname, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        link:link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: imgUrl, // 分享图标
        success: function () {
          // this.isShow=false
// 用户点击了分享后执行的回调函数
        },
        cancel: function (error) {


        }
      });



      wx.onMenuShareTimeline({
        title: title, // 分享标题
        desc: desc, // 分享描述
        // link: window.location.hostname+window.location.pathname, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: imgUrl, // 分享图标
        success: function () {
          // this.isShow=false
// 用户点击了分享后执行的回调函数
        },
        cancel: function (error) {


        }
      });


      wx.updateTimelineShareData({
        title: title, // 分享标题
        desc: desc, // 分享描述
        // link: window.location.hostname+window.location.pathname, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: imgUrl, // 分享图标
        success: function () {
          // this.isShow=false
// 用户点击了分享后执行的回调函数
        },
        cancel: function (error) {


        }
      });

      wx.updateAppMessageShareData({
        title: title, // 分享标题
        desc: desc, // 分享描述
        // link: window.location.hostname+window.location.pathname, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl:imgUrl, // 分享图标
        success: function () {
          // this.isShow=false
// 用户点击了分享后执行的回调函数
        },
        cancel: function (error) {


        }
      });

    })

  }
}
