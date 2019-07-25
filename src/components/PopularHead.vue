<template>
  <div class="head">
    <p @click="titleClick('排名')" class="headRate">排名</p>
    <p @click="titleClick('昵称')" class="headName">昵称</p>
    <p @click="titleClick('支持数')" class="headNumber">支持数</p>
  </div>
</template>

<script>
  export default {
    name: 'PopularHead',
    props:['itemClick'],
    data(){
      return {
        titles:[
          '排名',
          '昵称',
          '支持数'
        ]
      }
    },
    methods:{
      titleClick(title){
        this.itemClick(title)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../style/home.scss";
  .head{

    margin-top: 45px;
    height: 100px;
    line-height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .headRate{
      @include popular-head-title()
    }
    .headName{
      @include popular-head-title()
    }
    .headNumber{
      @include popular-head-title()
    }

  }
</style>
