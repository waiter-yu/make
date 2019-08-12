<template>
  <div>
    <div class="notice_box" v-if="displayshow">
      <div class="tips_box">
        <h3>告 白</h3>
        <div class="xian">

        </div>
        <div class="chackbox">
          <ul>
             <li :class="type==2?'active':''" @click="selecttype(2)">表白爱人
            </li>
             <li :class="type==3?'active':''" @click="selecttype(3)">单身宣言
            </li>
            <li :class="type==1?'active':''" @click="selecttype(1)">节日祝福
            </li>
           
           
          </ul>
        </div>
        <div class="input_box">
          <textarea id="ttt" maxlength='200' placeholder="多行输入" v-model="info" @blur="text" @focus="tt"></textarea>
        </div>
        <div class="num">
          {{num}}/200
        </div>
        <div class="submit">
          <a href="javascript:;" @click="submit"><img src="../assets/home/submission_button@2x.png" alt=""></a>
        </div>
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
import axios from "../utils/clerk.js"
import { setTimeout } from 'timers';
export default {
  props: ['share'],
  data() {
    return {
      displayshow: false,
      value: "",
      num: 0,
      info: "",
      type: 2,
      state: 1
    }
  },
  methods: {
    tt() {

      window.scroll(0, 0);
    },
    text() {



      this.$emit('scr')
    },
    shop() {
      this.displayshow = false
    },
    show() {
      this.displayshow = true
    },
    shuru() {
      console.log(666);

    },
    selecttype(value) {
      this.type = value
    },
    submit() {
      document.body.scrollTop = document.body.scrollHeight;
      // var input=document.getElementById("ttt");
      // input.blur();
      this.text()
      if (this.info.length == 0) {
        this.$toast('请输入愿望');
        return false
      }
      let obj = {
        wishingtreeContent: this.info,
        type: this.type
      }
      axios.post("/client/addWishingtree", obj).then(res => {
        console.log(res);
        if (res.data.code == 0) {
          this.$toast(res.data.msg);
        }
        this.$emit("res")
        this.displayshow = false
        axios.get("/client/myWishingtree").then(res=>{
this.share(res.data.data)
        })
        
      })
    }
  },
  watch: {
    info() {
      this.num = this.info.length
    },
    displayshow(v) {
      if (!v) {
        this.info = "",
          this.type = 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
      height: 1px;
      background: rgba(241, 241, 241, 1);
      width: 100%;
      margin-top: 20px;
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
      color: #ff3e94;
      background: url("../assets/home/img_biaoti_gaobai@2x.png") no-repeat;
      background-size: 100%;
    }
    ul {
      margin-top: 40px;
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
        background: #ffd5e8;
        color: rgba(255, 62, 148, 1);
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
