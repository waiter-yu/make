<template>
  <div class="box">

    <notice></notice>
  </div>
</template>

<script>
import notice from '@/components/notice'
export default {
  name: 'home',
  components: {
    notice
  },
  mounted () {
    console.log(location.search)
  }
}
</script>
<style lang="scss" scoped>
.box{
   background-color: #ff8080;
   height: 100%;
}
</style>
