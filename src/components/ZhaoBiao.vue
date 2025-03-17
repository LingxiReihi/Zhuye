<template>
  <div>
    <div v-for="li in ZhaoBiaoLink" :key="li.link" v-bind="li">
      <el-link type="info" :href="li.link">
        <div style="display: flex;justify-content: space-between;">
          <el-text type="info" line-clamp="1" class="m-w-250px mb-2">{{li.title}}</el-text>
        </div>
      </el-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
const ZhaoBiaoLink = [
  {
    title: "光电式编码器精密测量虚拟仿真实验项目采购公告",
    date: "3.29",
    link: "https://www.cqupt.edu.cn/info/1093/31503.htm"
  },
  {
    title: "重庆邮电大学2024-2025年度维修改造工程设计采购公告",
    date: "3.29",
    link: "https://www.cqupt.edu.cn/info/1093/31493.htm"
  },
  {
    title: "高性能定制GPU服务器采购采购公告",
    date: "3.29",
    link: "https://www.cqupt.edu.cn/info/1093/31483.htm"
  },
  {
    title: "相干成像与关联成像光路系统结果公告",
    date: "3.29",
    link: "https://www.cqupt.edu.cn/info/1093/31473.htm"
  }
];
</script>

<style lang="scss" scoped>
</style>