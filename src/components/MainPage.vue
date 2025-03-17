<!--主页布局-->
<template>
  <div class="common-layout">
    <!-- 页面整体布局 -->
    <el-container>
      <el-header class="bg" height="auto" style="width: 100%;">
        <!-- 页面头部，包含学校标志和导航菜单 -->
        <el-row justify="space-between">
          <el-col :span="12">
            <!-- 学校标志 -->
            <img src="/src/assets/CQUPT.png" />
          </el-col>
        </el-row>
        <el-row class="row-bg" justify="center">
          <!-- 导航菜单，采用水平模式，包含多个子菜单 -->
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo bg"
            mode="horizontal"
            @select="handleSelect"
            style="max-width: 100%;white-space: nowrap;"
            ellipsis="false"
          >
            <el-menu-item index="1">首页</el-menu-item>
            <el-sub-menu index="2">
              <!-- 学校概况子菜单 -->
              <template #title>学校概况</template>
              <el-menu-item index="2-1">学校简介</el-menu-item>
              <el-menu-item index="2-2">学校章程</el-menu-item>
              <el-menu-item index="2-3">学校领导</el-menu-item>
              <el-menu-item index="2-4">历史沿革</el-menu-item>
              <el-menu-item index="2-5">学院导航</el-menu-item>
              <el-menu-item index="2-6">管理机构</el-menu-item>
              <el-menu-item index="2-7">重邮校友</el-menu-item>
              <el-menu-item index="2-8">可视化校园</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="3">师资队伍</el-menu-item>
            <el-sub-menu index="4">
              <template #title>学科建设</template>
              <el-menu-item index="4-1">简介</el-menu-item>
              <el-menu-item index="4-2">硕士和博士学位授权学科</el-menu-item>
              <el-menu-item index="4-3">省部级重点学科</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="5">
              <template #title>科学研究</template>
              <el-menu-item index="5-1">科研成果</el-menu-item>
              <el-menu-item index="5-2">学术刊物</el-menu-item>
              <el-menu-item index="5-3">科研成果</el-menu-item>
              <el-menu-item index="5-4">产学研</el-menu-item>
              <el-menu-item index="5-5">社科在线</el-menu-item>
              <el-menu-item index="5-6">科技在线</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="6">
              <template #title>人才培养</template>
              <el-menu-item index="6-1">本科教育</el-menu-item>
              <el-menu-item index="6-2">研究生教育</el-menu-item>
              <el-menu-item index="6-3">留学生教育</el-menu-item>
              <el-menu-item index="6-4">继续教育</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="7">
              <template #title>招生就业</template>
              <el-menu-item index="7-1">招生信息</el-menu-item>
              <el-menu-item index="7-2">就业信息</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="8">
              <template #title>校园文化</template>
              <el-menu-item index="8-1">学术讲座</el-menu-item>
              <el-menu-item index="8-2">校园风光</el-menu-item>
              <el-menu-item index="8-3">学生活动</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="9">
              <template #title>合作交流</template>
              <el-menu-item index="9-1">国内合作交流</el-menu-item>
              <el-menu-item index="9-2">国际合作交流</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="10">
              <template #title>公共服务</template>
              <el-menu-item index="10-1">重邮校历</el-menu-item>
              <el-menu-item index="10-2">办公电话</el-menu-item>
              <el-menu-item index="10-3">校园地图</el-menu-item>
              <el-menu-item index="10-4">档案信息</el-menu-item>
              <el-menu-item index="10-5">网络服务</el-menu-item>
              <el-menu-item index="10-6">新年献词</el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-row>
      </el-header>
      <el-main style="background-color:#F5F5F5;">
        <!-- 页面主要内容区域 -->
        <FirstPage />
      </el-main>
      <el-footer class="myfooter bg">
        <!-- 页面底部区域 -->
        <MyFooter />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
</script>

<style scoped>
.image {
  width: 100%;
  height: auto;
}
.col {
  width: auto;
}
.myfooter {
  width: 100%;
}
.bg {
  background-color: #39c5bb;
}
</style>