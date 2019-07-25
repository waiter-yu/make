<template>
  <div class="box">
    <notice></notice>
  </div>
</template>

<script>
import notice from '@/components/notice'
import getcode from '@/utils/getcode.js'

export default {
  name: 'home',
  components: {
    notice
  },
  mixins: [getcode],
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
