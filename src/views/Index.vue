<template>
  <div class="page">
    <div class="bg">
      <img src="../assets/home/home_bg.png">
    </div>

    <!--<div style="width: 200px;height: 200px;background-color: red;z-index: 999" @click="toPush"></div>-->

    <!--<g-navigator></g-navigator>-->

    <div class="branch">
      <img class="branchImg" src="../assets/home/file_icon@2x.png" @click="settingClick" />
    </div>

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

    <div class="populorItem" @click="toPush"> </div>

    <div class="bottom">
      <img src="../assets/home/my dream_button.png" class="bottomImg" @click="dreamClick" />
      <img src="../assets/home/vow_button.png" class="bottomImg" @click="vowClick">
    </div>
    <mywish ref="mywish" :share="showPoster"></mywish>
    <notice ref="notice" @res="getListData()" @scr="scroll"></notice>
    <referral ref="referral"  v-if="isFirst" ></referral>
    <hewish ref="hewish" :share="showPoster"></hewish>
    <privacy ref="privacy"></privacy>
    <share-poster ref="poster"></share-poster>
    <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />

  </div>
</template>

<script>
  import Clerk from '../utils/clerk'
  import {share0peration} from '../utils/share'
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
  export default {
    name: 'index',
    mixins: [getcode],
    computed:{
      isFirst:()=>{
        // return true
        if (!sessionStorage.getItem('isFirst'))
        {
          sessionStorage.setItem('isFirst','1')
          return true
        }
        return false
      }
    },
    data() {
      return {
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
      document.body.addEventListener('touchmove',function(e){
        if(!e.isSCROLL){
            e.preventDefault(); //阻止默认事件(上下滑动)
        }else{
            //需要滑动的区域
            var top = el.scrollTop; //对象最顶端和窗口最顶端之间的距离 
            var scrollH = el.scrollHeight; //含滚动内容的元素大小
            var offsetH = el.offsetHeight; //网页可见区域高
            var cScroll = top + offsetH; //当前滚动的距离
 
            //被滑动到最上方和最下方的时候
            if(top == 0){
                top = 1; //0～1之间的小数会被当成0
            }else if(cScroll === scrollH){
                  el.scrollTop = top - 0.1;
            }
        }
    }, {passive: false}) //passive防止阻止默认事件不生效
      document.title = '许愿树有奖活动'
      // http://10.0.0.41:3003/?json=%7B%22openId%22%3A%22oaCrt0jVcy-4yyLveWk2hcQOK25Y%22,%22nickname%22%3A%22%3Fyu%22%7D#/
      // http://10.0.0.41:3003/popular?json=%7B%22openId%22%3A%22oaCrt0jVcy-4yyLveWk2hcQOK25Y%22,%22nickname%22%3A%22%3Fyu%22%7D#/popular
      // http://10.0.0.41:3003/?json=%7B%22openId%22%3A%22oaCrt0jVcy-4yyLveWk2hcQOK25Y%22,%22nickname%22%3A%22%3Fyu%22%7D#/
      console.log(process.env.VUE_APP_URL)
      this.getListData()
      share0peration()




      // https://www.jianshu.com/p/94d8c818a2d2
      // getLocalSign()
      // wxshare('','')
      // http://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=jsapisign

      // https://org.modao.cc/app/62fe3d819008636adab0f4c1ddafe355#screen=s113BAC8E381563179475052
      // https://lanhuapp.com/url/r3zwG-CVIql
      // https://lanhuapp.com/web/#/item/project/board/detail?pid=936c20b7-8d70-4a50-942d-01d6c65685ed&teamId=5bd13560-0818-496c-bdaa-05b49df5874a&project_id=936c20b7-8d70-4a50-942d-01d6c65685ed&image_id=be23589e-0f34-49c6-bbdd-42fceea93ef0
    },
    methods: {

      isFirst11(){
        if (!sessionStorage.getItem('isFirst'))
        {
          console.log('first')
          sessionStorage.setItem('isFirst','1')
          return true
        }
        return false

      },
      scroll(){
        // window.scrollTo(0, document.documentElement.clientHeight);
       document.body.scrollTop = 0;
      },
      onSelect(item) {
        // 点击选项时默认不会关闭菜单，可以手动关闭
        this.show = false;
        console.log(item);
        if (item.name == "活动介绍") {
          this.$refs.referral.show()
        }if(item.name=="用户隐私政策"){

          this.$refs.privacy.show()
        }
      },

      //分享
      showPoster(item){
        this.$refs.poster.show(item)
      },
      async getListData() {
        const response = await Clerk({
          url: '/client/wishingtreeList',
          method: 'get',
          params: { pageNum: this.pageNum, pageSize: this.pageSize }
        })

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
          currentNumber = response.data.data.content.length
          const pageNumber = 10
          for (let i = 0; i < currentNumber; i++) {
            const content = response.data.data.content

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
        this.show = true

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
      right: 50px;
      top: (30+64) px;
      width: 62px;
      height: 130px;
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
        width: 217px;
        height: 76px;
      }
      .dreamImg {
      }
      .vowImg {
      }
    }





  }



</style>
