<template>
  <div>                     
    <div class="notice_box" v-if="displayshow">
      <div class="tips_box">
        <h3>活动介绍</h3>
        <div class="xian"></div>
        <p>
         <strong> 【活动时间】</strong></br>
                &nbsp;2019.8.6--2019.8.8 (00:00-23:59) </br></br>
       <strong> 【活动规则】</strong></br>
                 &nbsp;1、每人可告白1次,有机会<span class="s2">获得大师加持</span></br>
                 &nbsp;2、告白被点赞次数越多,显示位置越靠前</br>
                 &nbsp;3、通过分享邀请支持,参与排名竞奖 </br>
                 &nbsp;4、点赞数前十用户,<span class="s2">可获开光吉品</span></br>
                 &nbsp;5、奖品包括：<span class="s2">姻缘绳/平安符/玛瑙链等</span></br></br>

          <strong>【温馨提醒】</strong></br>
               &nbsp;1、活动结束后,将由专人联系发奖 </br>
               &nbsp;2、<span class="s2">请务必填写用户资料,</span>信息绝对保密</br>
               &nbsp;3、用户亦可自行咨询,缘如易官方客服</br>
               &nbsp;4、<span class="s2">官方客服微信:yuands369</span></br>
               &nbsp;5、活动最终解释权归缘如易所有 </span></br>
               &nbsp;&nbsp;<a href="JavaScript:;" @click="yinsi">《用户隐私政策》</a>
              
        </p>
        
        <div class="show">
          <a href="javascript:;" @click="shop">
            <img src="../assets/home/popup_close_button@2x.png" alt="">
          </a>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayshow: true,
      value: "",
      num: 0,
      info: ""
    }
  },
  methods: {
    shop() {
      this.displayshow = false
    },
    show() {
      this.displayshow = true
    },
    shuru() {
      console.log(666);
    },
    yinsi(){
      console.log(1);
      
     this.displayshow = false
     this.$emit("showyinsi")
    }
  },
  watch: {
    info() {
      this.num = this.info.length
    }
  }
}
</script>

<style lang="scss" scoped>
a{
  text-decoration: underline;
}
.s2{
  color:#ff6dad;
}
.notice_box {
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
   display: flex;
  justify-content: center;
  align-items: center;
  .tips_box {
    width: 630px;
    height: 869px;
    background: #fff;
    border-radius: 10px;
    // margin: auto;
    // margin-top: 80px;
    padding: 30px;
    position: relative;
    .xian {
      width: 100%;
      height: 1px;
      background: rgba(241, 241, 241, 1);
    }
    p {
      color: #333333;
      font-size: 28px;
      margin-top: 20px;
      width: 580px;
      height: 672px;
      overflow: auto;
    }
    h3 {
       transform: translateY(-43px);
      line-height: 82px;
      margin: 0 auto;
      width: 361px;
      height: 82px;
      text-align: center;
      font-size: 32px;
      font-family: PingFang-SC-Bold;
      font-weight: bold;
      color: #FF3E94;
      background: url('../assets/home/img_biaoti_gaobai@2x.png') no-repeat;
      background-size: 100%;
    }
    ul {
      margin-top: 80px;
      display: flex;
      justify-content: space-between;
      li {
        padding: 28px 24px;
        border-radius: 10px;
        background-color: #f8f8f8;
        color: rgba(51, 51, 51, 1);
        font-size: 26px;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
      }
      li.active {
        padding: 28px 24px;
        border-radius: 10px;
        background: rgba(248, 235, 226, 1);
        color: rgba(83, 47, 19, 1);
        font-size: 26px;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
      }
    }
    .input_box {
      margin-top: 35px;

      textarea {
        display: block;
        width: 569px;
        height: 409px;
        background: rgba(245, 245, 245, 1);
        border-radius: 10px;
        border: none;
        resize: none;
        padding: 25px;
      }
    }
    .num {
      text-align: right;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(153, 153, 153, 1);
      line-height: 38px;
      font-size: 24px;
      margin-top: 10px;
    }
    .submit {
      width: 217px;
      height: 76px;
      margin: 0 auto;
      a {
        display: inline-block;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .show {
      position: absolute;
      width: 60px;
      height: 60px;
      bottom: -120px;
      left: 285px;
      a {
        display: inline-block;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}

</style>
