<template>
  <div class="itemHeight">
    <div class="content">
      <div :class="item.style" v-for="(item,index) in bubbleItems" :key="index" @click="bubbleClick(item)">
        <div class="around">
          <img :src="item.head" class="bubbleUserImg" v-if="item.isShow"/>
          <img src="../assets/home/water_polo.png" class="bubbleImg" />
        </div>


      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'BubblePage',
    props:['bubbleItems','bubblePress'],
    mounted(){
      // console.log('bubbleItems:',this.bubbleItems)
    },
    methods:{
      reload(data){

      },
      bubbleClick(item){
        this.bubblePress(item)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../style/home.scss";
  .bubble1{
    @include bubbleWithTopLeft(30px,359px);
  }

  .bubble21{
    @include bubbleWithTopLeft(216px,60px);
  }
  .bubble22{
    @include bubbleWithTopLeft(152px,250px);

  }
  .bubble23{
    @include bubbleWithTopLeft(170px,545px);
  }

  .bubble31{
    @include bubbleWithTopLeft(382px,145px);
  }
  .bubble32{
    @include bubbleWithTopLeft(280px,386px);
  }
  .bubble33{
    @include bubbleWithTopLeft(382px,590px);
  }

  .bubble41{
    @include bubbleWithTopLeft(567px,70px);
  }

  .bubble42{
    @include bubbleWithTopLeft(502px,338px);
  }

  .bubble43{
    @include bubbleWithTopLeft(536px,560px);
  }

  .bubbleImg{
    width: 100px;
    height: 100px;

  }

  .bubbleUserImg{
    top:0px;
    left: 0px;
    width: 100px;
    height: 100px;
    position: absolute;
    border-radius: 50px;
    overflow: hidden;
    z-index: -1;
  }

  .content{
    position:absolute ;
    width: 100%;
    height: 720px;
    margin-top:0px;
    background-color: rgba(0,0,0,0);
  }
  .itemHeight{
    height: 720px;
    background-color: rgba(0,0,0,0);
  }

</style>
