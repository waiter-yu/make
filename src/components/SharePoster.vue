<template>
  <div>
    <div class="page" v-if="isShow">
      <img src="../assets/share/img_fxyd_001.png" class="shareTip" v-if="isShowTip">

      <img src="../assets/share/icon_closexxxx.png" class="close" @click="hiddenClick"/>
      <div id="shot" class="main" >
        <img src="../assets/share/poster.png" class="posterBg"/>
        <div class="userInfo">
          <div style="display: flex;align-items: center;flex-direction: row" class="left">
            <img crossorigin="anonymous" :src="shareItem.head" class="userImg" v-if="shareItem.head"/>
            <img src="../assets/popular/user.png" class="userImg" v-else/>
            <div class="userCenter">
              <p class="userName">{{shareItem.nickname}}</p>
              <p class="userTip">您的好友邀请你一起来许愿</p>
            </div>
          </div>

          <div class="qrCodeItem">
            <img class="qrCode" src="../assets/share/IMG_6301.jpg"/>
            <!--<div id="qrcode" class="qrCode"></div>-->
            <p class="qrCodeTip">长按识别二维码</p>
          </div>
        </div>
      </div>



      <div class="share-bottom">
        <div class="share-bottomItem" @click="save">
          <img class="share-bottomImg" src="../assets/share/button_icon_changan_01.png"/>
          <p class="share-bottomTxt">长按图片保存</p>
        </div>

        <div class="share-bottomItem" @click="share">
          <img class="share-bottomImg" src="../assets/share/button_icon_lianjie_02.png"/>
          <p class="share-bottomTxt">分享链接</p>
        </div>

      </div>

      <img :src="uploadPath" class="uploadImg" v-if="uploadPath"/>

      <!--<div id="qrcode" class="qrCode"></div>-->


    </div>
  </div>

</template>

<script>
  import html2canvas from 'html2canvas'
  // import wx from 'weixin-js-sdk'
  import {share0peration} from '../utils/share'
  import Clerk from '../utils/clerk'
  import {wxshare} from '../utils/share'
  import QRCode from 'qrcodejs2'
  export default {
    name: "SharePoster",

    data(){
      return{
        uploadPath:null,
        shareItem:{},
        isShow:false,
        isShowTip:false,

      }
    },
    mounted(){
    },
    methods:{
      hiddenClick(){

        this.isShow=false











      },
      save(){
        // this.shotScreen()
      },
      async share(){
        this.isShowTip=true


      },
      async show(item){

        this.isShow=true
        this.shareItem=item

        setTimeout(()=>{
          this.shotScreen()
        },1)

        share0peration()

        // this.$nextTick(()=>{
        //   this.qrcode();
        // })




      },
      shotScreen(){

        console.log('shotScreen')
        // return
        if(this.uploadPath) return
        let dom = document.getElementById("shot")
        let width = dom.offsetWidth;
        let height = dom.offsetHeight;

        html2canvas(dom,{
          useCORS:true,
          logging:true,
          backgroundColor: null
        }).then(canvas => {
          canvas.style.width = width+"px";
          canvas.style.height = height+"px";
          var imgData = canvas.toDataURL("image/jpeg")
          this.uploadPath=imgData;
          // http://www.luyixian.cn/news_show_6105.aspx

        })
      },

      qrcode() {
        let qrcode = new QRCode('qrcode', {
          width: 35,
          height: 35,
          text: 'https://www.baidu.com', // 二维码地址
          colorDark : "#000",
          colorLight : "#fff",
        })
      },
    }
  }
</script>

<style lang="scss" scoped>
  .page{
    position: absolute;
    top:0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.75);
    z-index: 99;
  }

  .main{
    position: relative;
    padding: 60px;
    display: flex;
    top: 15px;
    /*justify-content: center;*/
  }
  .posterBg{
    width:630px ;
    height: 812px;
  }
  .userInfo{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 60px;
    background-color: white;
    width: 630px;
    overflow: hidden;
    position: absolute;
    bottom: 60px;
    left: 0px;
    height: 120px;

    .userImg{
      margin: 24px 10px 24px 24px;
      width:72px;
      height:72px;
      background:rgba(248,248,248,1);
      border:2px solid rgba(241,241,241,1);
      border-radius:50%;
    }



    .userCenter{
      /*background-color: yellow;*/

    }
    .userName{
      font-size:24px;
      font-family:PingFang-SC-Bold;
      font-weight:bold;
      color:rgba(51,51,51,1);
    }
    .userTip{
      font-size:18px;
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(153,153,153,1);
    }

    .qrCodeItem{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 35px;
    }
    .qrCode{
      width:76px;
      height:76px;
      background:rgba(225,225,225,1);
      border-radius:4px;
      /*background-color: red;*/

    }
    .qrCodeTip{
      margin-top: 4px;
      font-size:12px;
      font-family:PingFang-SC-Medium;
      color:rgba(153,153,153,1);
      text-align: center;
    }
  }

  .share-bottom{
    margin-top: 90px;
    background-color: rgba(0,0,0,0);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    .share-bottomItem{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .share-bottomImg{
        width: 110px;
        height: 110px;
      }
      .share-bottomTxt{
        /*width:148px;*/
        /*height:23px;*/
        margin-top: 20px;
        font-size:24px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
      }
    }
  }



  .close{
    margin-left: 355px;
    width: 42px;
    height: 42px;
    position: absolute;
    top: 1020px;
    /*right: 40px;*/
    /*background-color: red;*/
    z-index: 99;
    background-color: rgba(0,0,0,0);
  }

  .uploadImg{
    margin: 60px;
    position: absolute;
    top:0px;
    width:630px ;
    height: 812px;
    background-color: rgba(0,0,0,0);
    /*opacity: 0;*/
    z-index: 999;
  }
  .shareTip{
    position: absolute;
    top: -50px;
    right: 0px;
    background-color: rgba(0,0,0,0);
    width: 410px;
    height:110px ;
    z-index: 99;
  }



</style>
