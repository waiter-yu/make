<template>
  <div>
    <div class="popularItem">
      <div class="itemLeft">
        <img class="popluarRate" src="../assets/popular/the first_icon.png" v-if="rankNumber==0">
        <img class="popluarRate" src="../assets/popular/proxime_accessit_icon.png" v-else-if="rankNumber==1">
        <img class="popluarRate" src="../assets/popular/third_icon.png" v-else-if="rankNumber==2">
        <span class="rankNumber" v-else>{{rankNumber+1}}</span>
        <img class="popluarUserImg" :src="item.head" v-if="item.head.length>0">
        <img class="popluarUserImg" src="../assets/popular/user.png" v-else>
      </div>

      <p class="popluarUserName">{{item.nickname}}</p>
      <p class="popluarUserGrade">{{item.supportNumber ? item.supportNumber:'0'}}</p>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
  export default {
    name: 'PopularItem',
    props:['item','rankNumber'],
    data(){
      return{
        defaultUserIcon:'../assets/popular/the_first_icon.png'
      }
    },
  }
</script>

<style scoped lang="scss">
  @import "../style/home.scss";
  .popularItem{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100px;

    .itemLeft{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex:1;

      .popluarRate{
        width: 80px;
        height: 80px;
        margin-right: 20px;
      }

      .rankNumber{
        margin-right: 20px;
        width: 80px;
        height: 80px;
        line-height: 80px;
        text-align: center;

        font-size:32px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(51,51,51,1);
      }
      .popluarUserImg{

        width: 80px;
        height: 80px;
        border-radius: 40px;
        overflow: hidden;
      }
    }


    .popluarUserName{
      padding: 0px 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      @include popular-item-title();
      flex:1;
      height: 80px;
      line-height: 80px;
    }
    .popluarUserGrade{
      @include popular-item-title();
      flex:1;
    }
  }
  .line{
    background-color: #F1F1F1;
    height: 1px;
    margin: 0px 30px;

  }
</style>
