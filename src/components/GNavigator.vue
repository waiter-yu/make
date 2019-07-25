<template>
  <div class="nav">
    <p class="navTitle">许愿树</p>
    <img class="back" src="../assets/home/close_icon.png"/>
    <img class="share" src="../assets/home/more_icon.png"/>
  </div>
</template>

<script>
  export default {
    name: 'GNavigator'
  }
</script>

<style scoped lang="scss">
  @import "../style/home.scss";
  .nav{
    padding: 0px 30px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    background-color: white;
    .navTitle{
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 64px;
      background-color: rgba(0,0,0,0);
      text-align: center;
      line-height: 64px;
      font-size:32px;
      font-family:PingFang-SC-Bold;
      font-weight:bold;
      color:rgba(4,4,4,1);
    }
    .back{
      width: 40px;
      height: 40px;

    }
    .share{
      width: 40px;
      height: 40px;
    }
  }
</style>
