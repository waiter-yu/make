<template>
  <div class="page">


    <van-tabs v-model="currentIndex" swipeable
              title-inactive-color="#333333"
              title-active-color="#FF9E00"
              color="#FF9E00"
              line-height="4"
              @change="switchTab"
    >
      <van-tab v-for="(item,index) in titles" :title="item.title" :key="index" :name="index+1">
        <popular-head :itemClick="headItemClick"></popular-head>
        <div>
          <popular-item v-for="(item,index) in datas" :key="index" :item="item" :rankNumber="index"></popular-item>
        </div>
      </van-tab>
    </van-tabs>

    <div class="bottom">
      <p class="bottomNumber">总排名:{{user.ranking}}</p>

      <img class="bottomUserIcon" :src="user.head" v-if="user.head">
      <img class="bottomUserIcon" src="../assets/popular/user.png" v-else>
      <p class="bottomName">{{user.nickname}}</p>
      <p class="bottomGrade">{{user.supportNumber}}</p>
    </div>


    <share-poster ref="share" :shareItem=shareItem  ></share-poster>
  </div>
</template>

<script>
  import Clerk from '../utils/clerk'
  import {share0peration} from '../utils/share'
  import PopularHead from '../components/PopularHead'
  import PopularItem from '../components/PopularItem'
  import SharePoster from '../components/SharePoster'
  export default {
    name: 'Popular',
    components:{
      PopularHead,
      PopularItem,
      SharePoster
    },
    data(){
      return{
        type:1,
        pageNum:1,
        pageSize:1000,

        currentIndex:0,
        titles:[
          {title:'姻缘桃花'},
          {title:'事业财运'},
          {title:'祈福求子'},
        ],
        selectHeadTitle:'排名',
        datas:[

        ],
        user:{},
        shareItem:{
          userImg:'http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epSKLMW9fTQR1lO4NLUzkUCqEpETwl683ZHFMhOC9EXxuDnrZicyF2ZGeo193yverJVtJpGkYTmtew/132',
          userName:'Ken'
        }
      }
    },
    async mounted () {
      document.title='活动排行'
      share0peration()

      this.getData();
      this.getBottomData()

    },
    methods:{
      headItemClick(headTitle){
        this.selectHeadTitle='排名';
      },
      switchTab(name,title){

        console.log(name,title)
        this.type=name
        this.getData()
      },
      async getData(){
        const response=await Clerk({
          url:'/client/rankingList',
          method:'get',
          params:{type:this.type,pageNum:this.pageNum,pageSize:this.pageSize}
        })
        if(response.data.code=='0' && response.data.msg=='数据正常返回')
        {
          console.log('data',response)
          this.datas=response.data.data.content
        }
      },
      async getBottomData(){
        const response=await Clerk({
          url:'/client/myWishingtree',
          method:'get',
          params:{type:this.type,pageNum:this.pageNum,pageSize:this.pageSize}
        })

        if(response.data.code=='0' && response.data.msg=='数据正常返回')
        {
          console.log('data',response)
          this.user=response.data.data
        }
      }



    }
  }
</script>

<style lang="scss" scoped>
  @import "../style/home.scss";
  .page{
    width: 100%;
    height: 100%;
    background-color: rgba(250, 250, 250, 1);
  }



  .bottom{
    width: 100%;
    position: fixed;
    bottom:0px;
    left: 0px;
    display: flex;
    /*justify-content: space-between;*/
    justify-content: space-around;
    align-items: center;
    height: 100px;
    background-color: white;
    .bottomNumber{
      /*margin-left: 50px;*/
      text-align: center;

      flex: 1;
      height:100px;
      font-size:32px;
      font-family:PingFang-SC-Bold;
      font-weight:bold;
      color:rgba(255,0,0,1);
      line-height:100px
    }
    .bottomUserIcon{

      width: 80px;
      height: 80px;
      border-radius: 40px;
      overflow: hidden;

    }
    .bottomName{

      flex: 1;
      text-align: center;
      height:100px;
      font-size:28px;
      font-family:PingFang-SC-Bold;
      font-weight:bold;
      color:rgba(255,0,0,1);
      line-height:100px;
    }
    .bottomGrade{
      text-align:center ;
      flex: 1;


      height:100px;
      font-size:32px;
      font-family:PingFang-SC-Bold;
      font-weight:bold;
      color:rgba(255,0,0,1);
      line-height:100px;


    }

    /*.van-tabs__wrap .van-hairline--top-bottom{*/
    /*!*background-color: red!important;*!*/
    /*margin: 50px 0px !important;*/
    /*}*/
  }
</style>
