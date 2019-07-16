<template>
    <div class="bg">
      <div class="content">
        <p>活动介绍</p>
      </div>
    </div>
</template>

<script>
  export default {
    name: "Indro"
  }
</script>

<style lang="scss" scoped>
  .bg{
    width: 100%;
    height: 100%;
    background-color: red;
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content{
    margin: 0px 20px;
    background-color: white;
    height: 300px;
  }
</style>
