<template>
  <div style="height: 320px;">
    <el-carousel height="auto" autoplay>
      <!-- 轮播组件，自动播放，高度自适应 -->
      <el-carousel-item style="height: 300px">
        <!-- 轮播项，设置固定高度 -->
        <el-image src="/src/assets/img1.png" fit="scale-down" style="height: 300px" />
        <!-- 图片组件，自适应缩放，固定高度 -->
      </el-carousel-item>
      <el-carousel-item style="height: 300px">
        <!-- 第二个轮播项 -->
        <el-image src="/src/assets/img2.png" fit="scale-down" style="height: 300px" />
        <!-- 同上 -->
      </el-carousel-item>
      <el-carousel-item style="height: 300px">
        <!-- 第三个轮播项 -->
        <el-image src="/src/assets/img3.png" fit="scale-down" style="height: 300px" />
        <!-- 同上 -->
      </el-carousel-item>
      <el-carousel-item style="height: 300px">
        <!-- 第四个轮播项 -->
        <el-image src="/src/assets/img4.png" fit="scale-down" style="height: 300px" />
        <!-- 同上 -->
      </el-carousel-item>
    </el-carousel>
  </div>
</template>