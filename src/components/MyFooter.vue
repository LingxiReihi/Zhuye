<!-- 页脚 -->
<template>
  <div class="box">
    <div class="discription">
      <img style="height: 50px;width: 50px;" src="/src/assets/比心.svg" />
      <el-text class="mx-1" :line-clamp="2">页面作者：牟家乐</el-text>
    </div>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.discription {
  display: flex;
  justify-content: center;
}
</style>