<template>
    <div>
        <div class="notice_box" v-if="displayshow">
            <div class="tips_box">
                <h3>联系方式</h3>
                <div class="tips">
                    请您填写联系方式，活动结束后，获奖用户将由工
                    作人员联系领奖。
                </div>
                <div class="usernick">
                    <div class="title_user">
                        用户昵称
                    </div>
                    <input type="text" v-model="form.name" placeholder="输入用户昵称" :disabled='!state' @focus="tt">
                </div>
                <div class="userphone">
                    <div class="title_password">
                        微信号/手机号码
                    </div>
                    <input type="text" v-model="form.mobile" placeholder="输入微信号/手机号码" :disabled='!state' @focus="tt">
                </div>
                <div class="submit" @click="submit" v-if='state'>
                    <img src="../assets/home/submission_button 拷贝 5@2x.png" alt="">
                </div>
                <div class="submit" v-else>
                    <img src="../assets/home/submission_button 拷贝 5@99x.png" alt="">
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
    props: ['share'],
    data() {
        return {
            state: true,
            id: "",
            value: "",
            num: 0,
            info: "",
            displayshow: false,
            form: {
                name: "",
                mobile: ""
            }
        }
    },
    methods: {
      tt(){
        this.$emit('cancel')
      },
       async submit() {
            console.log(this.form);
            if (this.form.mobile == "" || this.form.name == "") {
                this.$toast("请填写完整信息");
                return false
            }
            let res=await axios.post("/client/addUserInfo",{...this.form})
             this.$toast(res.data.msg)
               this.$emit("ref")
            this.displayshow = false
        },
        toShare() {
            this.share(this.view)
        },
        shuru() {
            console.log(666);

        },
        shop() {
            this.displayshow = false
        },
        async show(info) {
            if (info.mobile == null) {
                this.state
            } else {
                this.state = false
                this.form=info
            }
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
        },
        displayshow(v) {
            if (!v) {
                this.form = {
                    name: "",
                    mobile: ""
                }
            }
        }
    },
    filters: {
        typefil(v) {
            if (v == 1) {
                return "节日祝福"
            } else if (v == 2) {
                return "表白爱人"
            } else if (v == 3) {
                return "单身宣言"
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
  z-index: 600;
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
    .tips {
      color: #ff3e94;
      line-height: 40px;
      font-size: 24px;
      padding: 20px;
      background-color: #fff4f9;
      border-radius: 10px;
    }
    .usernick {
      margin-top: 50px;
      .title_user {
        height: 23px;
        font-size: 24px;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
        line-height: 38px;
      }
      input {
        padding-left: 20px;
        border-radius: 10px;
        width: 100%;
        margin-top: 15px;
        height: 80px;
        background-color: rgba(245, 245, 245, 1);
        border: none;
      }
    }
    .userphone {
      margin-top: 40px;
      .title_password {
        height: 23px;
        font-size: 24px;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
        line-height: 38px;
      }
      input {
        padding-left: 20px;
        border-radius: 10px;
        width: 100%;
        margin-top: 15px;
        height: 80px;
        background-color: rgba(245, 245, 245, 1);
        border: none;
      }
    }
    .submit {
      width: 217px;
      height: 76px;
      margin: 0 auto;
      margin-top: 130px;
      img {
        width: 100%;
        height: 100%;
      }
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
