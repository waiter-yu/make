<template>
    <div class="page">
      <p></p>
    </div>
</template>

<script>
  import Clerk from '../utils/clerk'
  import Indro from '@/components/Indro'
  export default {
    name: 'index',
    components:{
      Indro
    },
    mounted(){
    }
  }
</script>

<style lang="scss" scoped>
  .page{
    width: 100%;
    height: 100%;
  }
  .bg{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .nav{
    width: 750px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: red;
    height: 44px;

  }
  .bottom{
    position: absolute;
    left: 0px;
    bottom: 0px;
    display: flex;
    width: 750px;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    background-color: red;
  }
</style>
