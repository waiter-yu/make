import Clerk from '../utils/clerk'

export const share0peration=async()=>{
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
        title: '许愿树有奖活动', // 分享标题
        desc: '您的好友邀请你一起来许愿!把愿望分享,用祝福传递!', // 分享描述
        // link: window.location.hostname+window.location.pathname, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        link: process.env.VUE_APP_SHARE, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'http://wx.ydsml.com/make/img/home_bg.f3b73334.png', // 分享图标
        success: function () {

          // this.isShow=false
// 用户点击了分享后执行的回调函数
        },
        cancel: function (error) {


        }
      });





      wx.onMenuShareAppMessage({
        title: '许愿树有奖活动', // 分享标题
        desc: '您的好友邀请你一起来许愿!把愿望分享,用祝福传递!', // 分享描述
        // link: window.location.hostname+window.location.pathname, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        link: process.env.VUE_APP_SHARE, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'http://wx.ydsml.com/make/img/home_bg.f3b73334.png', // 分享图标
        success: function () {
          // this.isShow=false
// 用户点击了分享后执行的回调函数
        },
        cancel: function (error) {


        }
      });



      wx.onMenuShareTimeline({
        title: '许愿树有奖活动', // 分享标题
        desc: '您的好友邀请你一起来许愿!把愿望分享,用祝福传递!', // 分享描述
        // link: window.location.hostname+window.location.pathname, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        link: process.env.VUE_APP_SHARE, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'http://wx.ydsml.com/make/img/home_bg.f3b73334.png', // 分享图标
        success: function () {
          // this.isShow=false
// 用户点击了分享后执行的回调函数
        },
        cancel: function (error) {


        }
      });


      wx.updateTimelineShareData({
        title: '许愿树有奖活动', // 分享标题
        desc: '您的好友邀请你一起来许愿!把愿望分享,用祝福传递!', // 分享描述
        // link: window.location.hostname+window.location.pathname, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        link: process.env.VUE_APP_SHARE, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'http://wx.ydsml.com/make/img/home_bg.f3b73334.png', // 分享图标
        success: function () {
          // this.isShow=false
// 用户点击了分享后执行的回调函数
        },
        cancel: function (error) {


        }
      });

      wx.updateAppMessageShareData({
        title: '许愿树有奖活动', // 分享标题
        desc: '您的好友邀请你一起来许愿!把愿望分享,用祝福传递!', // 分享描述
        // link: window.location.hostname+window.location.pathname, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        link: process.env.VUE_APP_SHARE, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'http://wx.ydsml.com/make/img/home_bg.f3b73334.png', // 分享图标
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
