<template>
  <div>
    <div class="notice_box" v-if="displayshow">
      <div class="tips_box">
        <h3>{{view.type | typefil}}</h3>
        <div class="photo_user">
          <img :src="view.head" alt="">
          <span>{{view.nickname}}</span>
        </div>
        <div class="pm">
          排 <strong>{{view.ranking}}</strong> 名 <span>{{view.supportNumber}}</span>人支持
        </div>
        <div class="content_wish">
          愿望:
          <p>
            {{view.wishingtreeContent}}
          </p>
        </div>
        <div class="operate">
          <img src="../assets/home/share_button.png" alt="" @click="toShare">
          <img src="../assets/home/support_button@2x.png" alt="" v-if="view.isSupport==0" @click="zhichi()">
          <img src="../assets/home/supported_button@2x.png" v-else alt="">
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
import { log } from 'util';
export default {
  props:['share'],
  data() {
    return {
      id: "",
      value: "",
      num: 0,
      info: "",
      displayshow: false,
      view: {}
    }
  },
  methods: {
    toShare(){
      this.share(this.view)
    },
    shuru() {
      console.log(666);

    },
    shop() {
      this.displayshow = false
    },
    async show(id) {
      this.id = id
      let data = await axios.get("/client/othersWishingtree", { params: { wxUserId: id } })

      this.view = data.data.data
      this.displayshow = true
    },
    async zhichi() {
      let data = await axios.post("/client/support", { id: this.view.id })
     this.$toast(data.data.msg);
      this.show(this.id)
    }
  },
  watch: {
    info() {
      this.num = this.info.length
    }
  },
  filters: {
    typefil(v) {
      if (v == 1) {
        return "姻缘桃花"
      } else if (v == 2) {
        return "事业财运"
      } else if (v == 3) {
        return "祈福求子"
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
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
  .tips_box {
    width: 630px;
    height: 869px;
    background: #fff;
    border-radius: 10px;
   margin:auto;
    margin-top: 80px;
    padding: 30px;
    position: relative;
    .photo_user {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        overflow: hidden;
      }
      span {
        margin: 25px;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 38px;
      }
    }
    .pm {
      text-align: center;
      font-weight:500;
      strong {
        font-size: 28px;
        color: #ff0000;
        font-weight:500;
      }
      span {
        font-weight:500;
        font-size: 32px;
        margin-left: 50px;
        color: #ff0000;
      }
    }
    .content_wish {
      margin-top: 40px;
      width: 100%;
      height: 292px;
      font-size: 28px;
      p {
        width: 100%;
        height: 262px;
        font-size: 28px;
        overflow: auto;
      }
    }
    .operate {
      margin-top: 41px;
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      img {
        width: 217px;
        height: 76px;
      }
    }
    h3 {
      text-align: center;
      font-size: 32px;
      font-family: PingFang-SC-Bold;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
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
