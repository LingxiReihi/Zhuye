<template>
  <div>
    <div v-for="li in xueShuLink" :key="li.link" v-bind="li">
      <el-link type="info" :href="li.link">
        <div style="display: flex;justify-content: space-between;">
          <el-text type="info" line-clamp="1" class="m-w-250px mb-2">{{li.title}}</el-text>
        </div>
      </el-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
const xueShuLink = [
  {
    title:
      "计算机科学与技术一流学科论坛——中国工程院院士，浙江大学谭建荣教授学术报告",
    date: "3.29",
    link: "https://www.cqupt.edu.cn/info/1092/31463.htm"
  },
  {
    title:
      "计算机科学与技术一流学科论坛——北京大学博雅特聘教授陈良怡博士学术报告",
    date: "3.28",
    link: "https://www.cqupt.edu.cn/info/1092/31403.htm"
  },
  {
    title:
      "【社科论坛】马克思主义学院 “南山论坛”名家学术讲座（2024年第1期）——思政学科40年发展及展望",
    date: "3.28",
    link: "https://www.cqupt.edu.cn/info/1092/31413.htm"
  },
  {
    title:
      "欧洲重庆中心基地国际名家系列学术讲座暨光电工程学院/国际半导体学院“追光擎电”学者论坛——高效溴氧铋基上转换光催化材料的构建与性能调控",
    date: "3.26",
    link: "https://www.cqupt.edu.cn/info/1092/31313.htm"
  }
];
</script>

<style lang="scss" scoped>
</style>