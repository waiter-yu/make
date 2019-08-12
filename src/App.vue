<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <music></music>
  </div>
</template>
<script>
import Music from './components/music'
export default {
  components: { Music }
}
</script>
<style lang="scss">
#app {
  height: 100%;
  width: 100%;
}
</style>
