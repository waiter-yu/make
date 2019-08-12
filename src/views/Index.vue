<template>
  <div class="page">
    <div class="bg">
      <img src="../assets/home/home_bg@2x.png">
    </div>

    <!--<div style="width: 200px;height: 200px;background-color: red;z-index: 999" @click="toPush"></div>-->

    <!--<g-navigator></g-navigator>-->
    <div class="branch">
      <img class="branchImg" src="../assets/home/file_icon@2x.png" @click="settingClick" />
    </div>
    <div class="sen">
      <img class="senImg" src="../assets/home/icon_gbphb@3x.png" @click="toPush" />
    </div>
    <img src="../assets/home/icon_music_off@2x.png" alt="" class="sen2" v-if="music==1" @click="musicstate(2)">
    <img src="../assets/home/icon_music_no@2x.png" alt="" class="sen2" v-else @click="musicstate(1)">

    <div>
      <van-swipe indicator-color="white" :loop="false">

        <!--<van-swipe-item v-for="(item,index) in result.pageCount ? result.pageCount:1" :key="index">-->
        <!--<bubble-page :bubbleItems="bubbleItems" :bubblePress="bubbleClick"></bubble-page>-->
        <!--</van-swipe-item>-->

        <van-swipe-item v-for="(item,index) in showDatas" :key="index">
          <bubble-page :bubbleItems="item" :bubblePress="bubbleClick"></bubble-page>
        </van-swipe-item>

      </van-swipe>

    </div>

    <div class="populorItem"> </div>
    <!-- 告白 -->
    <div class="bottom" v-if="state">
      <img src="../assets/home/button_gaobai@2x.png" class="bottomImg" @click="vowClick()" />
    </div>
    <div class="bottom_two" v-else>
      <img src="../assets/home/button_wdgb@2x.png" class="bottomImg" @click="dreamClick" />
      <img src="../assets/home/button_cyy@2x.png" class="bottomImg" @click="cesuan" />
    </div>
    <mywish ref="mywish" :share="showPoster"></mywish>
    <notice ref="notice" @res="getListData()" @scr="scroll" :share="showPoster"></notice>
    <referral ref="referral" @showyinsi="$refs.privacy.show()"></referral>
    <hewish ref="hewish" :share="showPoster"></hewish>
    <privacy ref="privacy" @showgg='$refs.referral.show()'></privacy>
    <share-poster ref="poster"></share-poster>
    <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
  </div>
</template>

<script>
import Clerk from '../utils/clerk'
import { share0peration } from '../utils/share'
// import 'swiper/dist/css/swiper.css'
import { getLocalSign, wxshare } from '../utils/share'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import BubblePage from '../components/BubblePage'
import GNavigator from '../components/GNavigator'
import SharePoster from '../components/SharePoster'
import notice from '@/components/notice'
import referral from '@/components/referral'
import getcode from "../utils/getcode.js"
import hewish from '@/components/hewish'
import mywish from '@/components/mywish'
import privacy from '@/components/privacy'
import bus from "@/utils/bus"
export default {
  name: 'index',
  mixins: [getcode],
  data() {
    return {
      music: 2,
      state: true,
      show: false,
      actions: [
        { name: '活动介绍' },
        { name: '用户隐私政策' }
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      bubbleItems: [
      ],
      showDatas: [],
      pageNum: 1,
      pageSize: 10000,
      list: [],
      result: {}
    }
  },
  components: {
    swiper,
    swiperSlide,
    BubblePage,
    GNavigator,
    SharePoster,
    mywish,
    hewish,
    notice,
    referral,
    privacy
  },
  mounted() {

    // document.body.addEventListener('touchmove', function (e) {
    //   console.log(location);

    //   if (location.href.indexOf("popular") != -1) {
    //     console.log(1);
    //     //需要滑动的区域
    //     var top = el.scrollTop; //对象最顶端和窗口最顶端之间的距离 
    //     var scrollH = el.scrollHeight; //含滚动内容的元素大小
    //     var offsetH = el.offsetHeight; //网页可见区域高
    //     var cScroll = top + offsetH; //当前滚动的距离

    //     //被滑动到最上方和最下方的时候
    //     if (top == 0) {
    //       top = 1; //0～1之间的小数会被当成0
    //     } else if (cScroll === scrollH) {
    //       el.scrollTop = top - 0.1;
    //     }

    //   }
   
    //     e.preventDefault(); //阻止默认事件(上下滑动)
 
    // }, { passive: false }) //passive防止阻止默认事件不生效
    document.title = '七夕告白'

    console.log(process.env.VUE_APP_URL)
    this.getListData()
    share0peration()
    this.$refs.referral.show()
    this.$nextTick(() => {
      this.musicstate(1)
    })

  },
  methods: {
    musicstate(val) {
      this.music = val
      bus.$emit("music", val)
    },
    cesuan() {
      location.href = 'http://www.yyktlt.cn'
    },

    isFirst11() {
      if (!sessionStorage.getItem('isFirst')) {
        console.log('first')
        sessionStorage.setItem('isFirst', '1')
        return true
      }
      return false

    },
    scroll() {
      // window.scrollTo(0, document.documentElement.clientHeight);
      document.body.scrollTop = 0;
    },
    onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = false;
      console.log(item);
      if (item.name == "活动介绍") {
        this.$refs.referral.show()
      } if (item.name == "用户隐私政策") {

        this.$refs.privacy.show()
      }
    },

    //分享
    showPoster(item) {
      this.$refs.poster.show(item)
    },
    async getListData() {
      const response = await Clerk({
        url: '/client/wishingtreeList',
        method: 'get',
        params: { pageNum: this.pageNum, pageSize: this.pageSize }
      })
      //判断是否告白过
      if (response.data.data.isWishing == 0) {
        this.state
      } else {
        this.state = false
      }
      if (response.data.code == '0' && response.data.msg == '数据正常返回') {
        // console.log('data', response)
        let showList = [];
        let bubbleStyle = [
          'bubble1',

          'bubble21',
          'bubble22',
          'bubble23',

          'bubble31',
          'bubble32',
          'bubble33',


          'bubble41',
          'bubble42',
          'bubble43',
        ]


        let currentNumber = 10
        currentNumber = response.data.data.wishingtreeDataList.content.length
        const pageNumber = 10
        for (let i = 0; i < currentNumber; i++) {
          const content = response.data.data.wishingtreeDataList.content

          let fakeItem = {
            head: "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epSKLMW9fTQR1lO4NLUzkUCqEpETwl683ZHFMhOC9EXxuDnrZicyF2ZGeo193yverJVtJpGkYTmtew/132",
            id: 8,
            isSupport: 1,
            nickname: "℡yu",
            openId: '',
            ranking: '',
            state: '',
            supportNumber: null,
            time: '',
            type: 1,
            wishingtreeContent: "haha",
            wxUserId: 2,
            isShow: false,
          }

          fakeItem.style = bubbleStyle[i % pageNumber]

          if (i < content.length) {
            content[i].style = bubbleStyle[i % pageNumber]
            content[i].isShow = true
            showList.push(content[i])
          }
          else {
            showList.push(fakeItem)
          }
        }
        this.result = response.data.data




        let showDatas = []
        let sections = []
        showList.map((item, index) => {
          sections.push(item)
          if (sections.length % pageNumber == 0) {
            showDatas.push(sections)
            sections = []
          }
        })
        if (sections.length > 0) showDatas.push(sections)


        this.showDatas = showDatas
        this.bubbleItems = showList
        // console.log('showList:',showList)
        // console.log(showDatas)
        // console.log('result:',this.result)


      }
    },

    bubbleClick(item) {
      this.$refs.hewish.show(item.wxUserId)
      // console.log('bubbleClick888:', item)
    },
    toPush() {
      // console.log('99999')
      this.$router.push('/popular')
    },
    async dreamClick() {
      this.$refs.mywish.show()
    },
    vowClick() {
      this.$refs.notice.show()

    },
    settingClick() {
      // this.show = true
      this.$refs.referral.show()
    },



  }
}
</script>

<style lang="scss" scoped>
@import "../style/home.scss";
.page {
  width: 100%;
  height: 100%;
  position: relative;
  background: url("../assets/home/mg_huabandonghua.gif") no-repeat;
  // background-position: 50% 100%;
  background-size: 100% 100%;
  .bg {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: -1;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .branchImg {
    z-index: 3;
    position: absolute;
    right: 120px;
    top: (30+64) px;
    width: 62px;
    height: 130px;
  }
  .sen {
    position: absolute;
    z-index: 3;
    width: 221px;
    height: 113px;
    left: 30px;
    top: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .sen2 {
    position: absolute;
    z-index: 3;
    width: 75px;
    height: 108px;
    right: 21px;
    top: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .populorItem {
    position: absolute;
    background-color: rgba(0, 0, 0, 0);
    /*margin-top: 750px;*/
    top: 66%;
    margin-left: 441px;
    width: 200px;
    height: 100px;
  }
  .bottom {
    position: absolute;
    left: 0px;
    bottom: 64px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    height: 76px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .bottomImg {
      width: 512px;
      height: 160px;
    }
    .dreamImg {
    }
    .vowImg {
    }
  }
  .bottom_two {
    position: absolute;
    left: 0px;
    bottom: 64px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    height: 76px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      width: 342px;
      height: 160px;
    }
  }
}
</style>
