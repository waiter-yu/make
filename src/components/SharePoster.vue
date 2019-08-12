<template>
  <div style="background-color: rgba(0, 0, 0, 1);">
    <div class="pages" v-if="isShow">
      <img src="../assets/share/img_fxyd_001.png" class="shareTip" v-if="isShowTip">

      <img src="../assets/share/icon_closexxxx.png" class="close" @click="hiddenClick" v-if="!isShowTip" />
      <div id="shot" class="main" @click="isShowTip=false">
        <img :src="img_bg" class="posterBg" style="pointer-events: none;" @load="loadEndImg"/>
        <div class="userInfo">
          <div style="display: flex;align-items: center;flex-direction: row" class="left">
            <img :src="shareItem.head" class="userImg" v-if="shareItem.head" style="pointer-events: none;" />
            <img src="../assets/popular/user.png" class="userImg" v-else style="pointer-events: none;" />
            <div class="userCenter">
              <p class="userName">{{shareItem.nickname}}</p>
              <p class="userTip">{{title}}</p>
            </div>
          </div>

          <div class="qrCodeItem">
            <img class="qrCode" src="../assets/share/erweima.jpg" />
            <!-- <div id="qrcode" class="qrCode"></div> -->
            <p class="qrCodeTip">长按识别二维码</p>
          </div>
        </div>
      </div>

      <div class="share-bottom">
        <div class="share-bottomItem" @click="save">
          <img class="share-bottomImg" src="../assets/share/button_icon_changan_01.png" style="pointer-events: none;" />
          <p class="share-bottomTxt">长按图片分享</p>
        </div>

        <div class="share-bottomItem" @click="share">
          <img class="share-bottomImg" src="../assets/share/button_icon_lianjie_02.png" />
          <p class="share-bottomTxt">分享链接</p>
        </div>

      </div>

      <img :src="uploadPath" class="uploadImg" v-show="uploadPath" />

      <!--<div id="qrcode" class="qrCode"></div>-->

    </div>
  </div>

</template>

<script>
import html2canvas from 'html2canvas'
// import wx from 'weixin-js-sdk'
import { share0peration } from '../utils/share'
import Clerk from '../utils/clerk'
import { wxshare } from '../utils/share'
import QRCode from 'qrcodejs2'
import img_1 from '../assets/share/1_min.png'
import img_2 from '../assets/share/2_min.png'
import img_3 from '../assets/share/3_min.png'
import { setTimeout } from 'timers';
export default {
  name: "SharePoster",

  data() {
    return {
      uploadPath: null,
      shareItem: {},
      isShow: false,
      isShowTip: false,
      title: "来自单身狗的愤怒",
      img_bg: img_1
    }
  },
  mounted() {
  },
  methods: {
    hiddenClick() {
      this.isShow = false
    },
    save() {
      // this.shotScreen()
    },
    loadEndImg(){
        //  this.$nextTick(() => {
        //   // this.qrcode()
        //   this.shotScreen()
        // })
    },
    async share() {
      this.isShowTip = true


    },
    async show(item) {
      if (item.type == 1) {
        this.img_bg = img_1
        this.title = "猜猜我对你的思念"
      } else if (item.type == 2) {
        this.img_bg = img_2
        this.title = "偷瞄一下我的小情话"
      } else if (item.type == 3) {
        this.img_bg = img_3
        this.title = "来自单身狗的内心独白"
      }

      this.isShow = true
      this.shareItem = item
      this.uploadPath = null

      setTimeout(()=>{
        // share0peration()

        this.$nextTick(() => {
          // this.qrcode()
          this.shotScreen()
          this.shotScreen()
        })
      }, 100)




    },
    shotScreen() {

      console.log('shotScreen')
      // return
      if (this.uploadPath) return
      let dom = document.getElementById("shot")
      let width = dom.offsetWidth;
      let height = dom.offsetHeight;

      html2canvas(dom, {
        useCORS: true,
        logging: true,
        backgroundColor: 'rgba(0,0,0,0)'
      }).then(canvas => {

        // alert('11111'+canvas)
        canvas.style.width = '630px'
        canvas.style.height = '812px'
        var imgData = canvas.toDataURL("image/jpeg")


        this.uploadPath = imgData;
        // http://www.luyixian.cn/news_show_6105.aspx

      }).catch(error => {
        alert(error)
      })
    },

    qrcode() {
      let qrcode = new QRCode('qrcode', {
        width: 35,
        height: 35,
        text: 'https://www.baidu.com', // 二维码地址
        colorDark: "#000",
        colorLight: "#fff"
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.pages {
  position: absolute;
  top: 0px;
  left: 0px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 1);
  z-index: 999;
}

.main {
  position: relative;
  padding: 60px;
  display: flex;
  top: 50px;
  /*justify-content: center;*/
}
.posterBg {
  width: 630px;
  height: 812px;
}
.userInfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 60px;
  background-color: white;
  width: 630px;
  overflow: hidden;
  position: absolute;
  bottom: 30px;
  left: 0px;
  height: 130px;
  .userImg {
    margin: 24px 10px 24px 24px;
    width: 72px;
    height: 72px;
    background: rgba(248, 248, 248, 1);
    border: 2px solid rgba(241, 241, 241, 1);
    border-radius: 50%;
  }

  .userCenter {
    /*background-color: yellow;*/
  }
  .userName {
    font-size: 24px;
    font-family: PingFang-SC-Bold;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }
  .userTip {
    font-size: 18px;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
  }

  .qrCodeItem {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 35px;
  }
  .qrCode {
    width: 76px;
    height: 76px;
    background: rgba(225, 225, 225, 1);
    border-radius: 4px;
    /*background-color: red;*/
  }
  .qrCodeTip {
    margin-top: 4px;
    font-size: 12px;
    font-family: PingFang-SC-Medium;
    color: rgba(153, 153, 153, 1);
    text-align: center;
  }
}

.share-bottom {
  margin-top: 28px;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  .share-bottomItem {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .share-bottomImg {
      width: 110px;
      height: 110px;
    }
    .share-bottomTxt {
      /*width:148px;*/
      /*height:23px;*/
      margin-top: 20px;
      font-size: 24px;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }
  }
}

.close {
  margin-left: 355px;
  width: 42px;
  height: 42px;
  position: absolute;
  top: 40px;
  right: 40px;
  /*right: 40px;*/
  /*background-color: red;*/
  z-index: 99;
  background-color: rgba(0, 0, 0, 0);
}

.uploadImg {
  margin: 30px;
  margin-top: 80px;
  position: absolute;
  top: 0px;
  width: 680px;
  height: 812px;
  background-color: rgba(0, 0, 0, 0.5);
  /*opacity: 0;*/
  z-index: 999;
}
.shareTip {
  position: absolute;
  top: -20px;
  right: 0px;
  background-color: rgba(0, 0, 0, 0);
  width: 410px;
  height: 110px;
  z-index: 99;
}
.uploadImg {
  // margin:0 auto;
  //     width: 100%;
  height: 880px;
}
</style>
