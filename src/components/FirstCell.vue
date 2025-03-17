<!-- 主页中心一格展示内容 -->
<template>
  <div class="firstCell">
    <el-card class="chongYouNews" @click="newsClicked()">
      <!-- 重邮新闻板块标签 -->
      <template #header>
        <div class="card-header">
          <span>重邮新闻</span>
        </div>
      </template>
      <div class="news">
        <!-- 新闻概览图及部分内容概览 -->
        <div class="newsImg">
          <el-image src="/src/assets/news.png" fit="contain" />
        </div>
        <div class="newsDetail">
          <el-text type="info" line-clamp="8" style="color:slategray;">
            砥砺前行新征程 奋进逐梦谱新篇
            学校召开2024年春季开学工作会暨第三届五次教代会工代会
            日期：2024-02-23 供稿单位：融媒体中心 点击率：2092次
            本网讯（记者 饶金兰 编审 陈瑞涵）2月23日上午，学校在综合实验楼学术报告厅召开2024年春季开学工作会暨第三届五次教代会工代会。会议听取了学校春季开学工作报告、财务工作报告、工会教代会工代会工作报告。会议回顾总结2023年学校工作、分析学校事业发展的大局大势，安排部署了2024年重点工作。会议明确2024年为学校“贯彻落实党代会精神攻坚突破年”。
            校党委书记李林主持会议并作总结讲话，校长高新波作开学工作报告，校领导许光洪、林金朝、陈前斌、王国胤、伍安春、张清华出席。
          </el-text>
        </div>
        <!-- 相关新闻链接 -->
        <div class="newsList">
          <!-- 
            <el-link>: Element UI中的链接组件，用于创建可点击的链接。
            type="info": 设置链接的类型为信息样式。
            href="https://xwzx.cqupt.edu.cn/cqupt_xwzx/news.jsp?id=2J100694W446A7E5": 链接的目标URL，指向该新闻的详细页面。
            <div style="display: flex;justify-content: space-between;">: 定义了一个弹性容器，使得新闻标题和日期能在一行内居中并对齐展示。
            <el-text type="info" line-clamp="1" class="m-w-250px mb-2">: Element UI的文本组件，用于展示新闻标题。
            type="info": 设置文本样式为信息类型。
            line-clamp="1": 限制文本至多显示一行。
            class="m-w-250px mb-2": CSS类，设置标题的宽度为250px，并添加底部2px的外边距。
            <el-text type="info" line-clamp="1" class="w-50px mb-2">: 同上，用于展示新闻的发布日期。
          -->
          <el-link
            type="info"
            href="https://xwzx.cqupt.edu.cn/cqupt_xwzx/news.jsp?id=2J100694W446A7E5"
          >
            <div style="display: flex;justify-content: space-between;">
              <el-text type="info" line-clamp="1" class="m-w-250px mb-2">泰中友好关系协会名誉主席纪拉崆亲王率团到访我校</el-text>
              <el-text type="info" line-clamp="1" class="w-50px mb-2">3.24</el-text>
            </div>
          </el-link>
          <el-link
            type="info"
            href="https://xwzx.cqupt.edu.cn/cqupt_xwzx/news.jsp?id=2B099E1051X938M1"
          >
            <div style="display: flex;justify-content: space-between;">
              <el-text type="info" line-clamp="1" class="m-w-250px mb-2">学校举行第六届校园马拉松比赛</el-text>
              <el-text type="info" line-clamp="1" class="w-50px mb-2">3.23</el-text>
            </div>
          </el-link>
          <el-link
            type="info"
            href="https://xwzx.cqupt.edu.cn/cqupt_xwzx/news.jsp?id=TG20983KW8946554"
          >
            <div style="display: flex;justify-content: space-between;">
              <el-text type="info" line-clamp="1" class="m-w-250px mb-2">校领导带队赴四川省三所高校开展调研交流</el-text>
              <el-text type="info" line-clamp="1" class="w-50px mb-2">3.22</el-text>
            </div>
          </el-link>
          <el-link
            type="info"
            href="https://xwzx.cqupt.edu.cn/cqupt_xwzx/news.jsp?id=20E974J39O43O994"
          >
            <div style="display: flex;justify-content: space-between;">
              <el-text
                type="info"
                line-clamp="1"
                class="m-w-250px mb-2"
              >学校召开深入学习习近平总书记“3·18”重要讲话精神加强思政课建设座谈会</el-text>
              <el-text type="info" line-clamp="1" class="w-50px mb-2">3.21</el-text>
            </div>
          </el-link>
          <el-link
            type="info"
            href="https://xwzx.cqupt.edu.cn/cqupt_xwzx/news.jsp?id=2K09669R47I546C7"
          >
            <div style="display: flex;justify-content: space-between;">
              <el-text type="info" line-clamp="1" class="m-w-250px mb-2">我校与重庆三峡银行签订校企合作协议</el-text>
              <el-text type="info" line-clamp="1" class="w-50px mb-2">3.20</el-text>
            </div>
          </el-link>
          <el-link
            type="info"
            href="https://xwzx.cqupt.edu.cn/cqupt_xwzx/news.jsp?id=209648F54D8HI410"
          >
            <div style="display: flex;justify-content: space-between;">
              <el-text type="info" line-clamp="1" class="m-w-250px mb-2">学校召开四届党委第二轮巡察动员部署会</el-text>
              <el-text type="info" line-clamp="1" class="w-50px mb-2">3.20</el-text>
            </div>
          </el-link>
        </div>
      </div>
    </el-card>
    <!-- 宣传图片轮播 -->
    <el-card class="xuanChuanImg">
      <div>
        <el-carousel height="auto" autoplay>
          <el-carousel-item style="height: 250px">
            <el-image src="/src/assets/rimg1.jpg" fit="contain" style="height: 300px" />
          </el-carousel-item>
          <el-carousel-item style="height: 250px">
            <el-image src="/src/assets/rimg2.png" fit="contain" style="height: 300px" />
          </el-carousel-item>
          <el-carousel-item style="height: 250px">
            <el-image src="/src/assets/rimg3.png" fit="contain" style="height: 300px" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
/**
 * 当新闻被点击时执行的函数。
 * 该函数会打开一个指定URL的新闻页面。
 *
 */
function newsClicked() {
  // 在新窗口中打开指定的新闻页面URL
  window.open(
    "https://xwzx.cqupt.edu.cn/cqupt_xwzx/news.jsp?id=207S41LY77H81274"
  );
}
</script>

<style scoped>
/* 定义 .firstCell 样式，用于居中显示内容，并设置元素之间的间距 */
.firstCell {
  display: flex; /* 使用弹性布局 */
  justify-content: center; /* 居中对齐 */
  gap: 20px; /* 设置元素之间的间距 */
}

/* 定义 .news 样式，用于新闻内容的布局 */
.news {
  display: flex; /* 使用弹性布局 */
  justify-content: space-between; /* 两端对齐，使元素之间间距相等 */
}

/* 定义新闻图片的宽度 */
.newsImg {
  width: 25%;
}

/* 定义新闻详情的宽度 */
.newsDetail {
  width: 25%;
}

/* 定义新闻列表的宽度 */
.newsList {
  width: 40%;
}

/* 定义 .listInfo 样式，用于列表信息的布局，保证信息居中且最大宽度不超过90% */
.listInfo {
  display: flex; /* 使用弹性布局 */
  justify-content: space-between; /* 两端对齐 */
  max-width: 90%; /* 设置最大宽度 */
}

/* 定义重油新闻的宽度 */
.chongYouNews {
  width: 50%;
}

/* 定义宣传图片的宽度，并使其居中 */
.xuanChuanImg {
  width: 20%;
  justify-content: center; /* 居中对齐 */
}

/* 当屏幕宽度不超过750px时，对样式进行响应式调整 */
@media screen and (max-width: 750px) {
  /* 在小屏下，使 .firstCell 和 .news 的内容垂直居中 */
  .firstCell,
  .news {
    flex-direction: column; /* 方向改为垂直 */
    justify-content: center; /* 居中对齐 */
  }

  /* 在小屏下，使各新闻相关内容占满全屏 */
  .newsImg,
  .newsDetail,
  .newsList,
  .chongYouNews,
  .xuanChuanImg {
    width: 100%;
  }
}
</style>
