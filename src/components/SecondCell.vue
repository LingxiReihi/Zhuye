<template>
  <div class="second-cell">
    <el-card class="kuaisulianjie">
      <template #header>
        <!-- 卡片头部模板 -->
        <div class="card-header">
          <!-- 显示“快速链接”文本 -->
          <span>快速链接</span>
        </div>
      </template>
      <div class="lianjie">
        <!-- 链接左边的按钮及展开项 -->
        <div class="left_button">
          <el-dropdown size="small">
            <el-button type="primary" size="small">
              学院导航
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
                <el-dropdown-item>Action 4</el-dropdown-item>
                <el-dropdown-item>Action 5</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <el-dropdown size="small">
            <el-button type="primary" size="small">
              部门机构
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
                <el-dropdown-item>Action 4</el-dropdown-item>
                <el-dropdown-item>Action 5</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <el-dropdown size="small">
            <el-button type="primary" size="small">
              友情链接
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
                <el-dropdown-item>Action 4</el-dropdown-item>
                <el-dropdown-item>Action 5</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <!-- 右侧按钮区域 -->
        <div class="right_button">
          <!-- 遍历快速链接列表，并生成链接 -->
          <div v-for="li in kuaisulianjie" :key="li.title">
            <el-link :href="li.link" target="_blank">{{ li.title }}</el-link>
          </div>
        </div>
      </div>
    </el-card>
    <el-card class="xueshu">
      <template #header>
        <div class="card-header">
          <span>
            <!-- 导航到学术讲座页面 -->
            <router-link to="/XueShu">学术讲座</router-link>
            <el-divider direction="vertical" />
            <!-- 导航到招标信息页面 -->
            <router-link to="/ZhaoBiao">招标信息</router-link>
          </span>
        </div>
      </template>
      <div>
        <!-- 子路由页面，用于显示不同标签下的链接，内容见XueShu.vue和ZhaoBiao.vue -->
        <router-view />
      </div>
    </el-card>
    <!-- 校务公告板块，链接与之前的快速链接等相同 -->
    <el-card class="xiaowugonggao" @click="OnClicked(3)">
      <template #header>
        <div class="card-header">
          <span>校务公告</span>
        </div>
      </template>
      <div class="newsList">
        <el-link type="info" href="https://www.cqupt.edu.cn/info/1091/30723.htm">
          <div style="display: flex;justify-content: space-between;">
            <el-text type="info" line-clamp="1" class="m-w-250px mb-2">重庆邮电大学2024年单位预算情况说明</el-text>
            <el-text type="info" line-clamp="1" class="w-50px mb-2">2.23</el-text>
          </div>
        </el-link>
        <el-link type="info" href="https://www.cqupt.edu.cn/info/1091/27963.htm">
          <div style="display: flex;justify-content: space-between;">
            <el-text type="info" line-clamp="1" class="m-w-250px mb-2">《重庆邮电大学2022-2023学年本科教学质量报告》</el-text>
            <el-text type="info" line-clamp="1" class="w-50px mb-2">12.05</el-text>
          </div>
        </el-link>
        <el-link type="info" href="https://www.cqupt.edu.cn/info/1091/12383.htm">
          <div style="display: flex;justify-content: space-between;">
            <el-text type="info" line-clamp="1" class="m-w-250px mb-2">重庆邮电大学2022年度部门决算公开</el-text>
            <el-text type="info" line-clamp="1" class="w-50px mb-2">8.22</el-text>
          </div>
        </el-link>
        <el-link type="info" href="https://www.cqupt.edu.cn/info/1091/11132.htm">
          <div style="display: flex;justify-content: space-between;">
            <el-text type="info" line-clamp="1" class="m-w-250px mb-2">重庆邮电大学关于高等学历继续教育招生的声明</el-text>
            <el-text type="info" line-clamp="1" class="w-50px mb-2">3.29</el-text>
          </div>
        </el-link>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
//存储链接及其名称的json字段
const kuaisulianjie = [
  {
    title: "服务大厅",
    link: "https://i.cqupt.edu.cn/"
  },
  {
    title: "信息公开",
    link: "http://xxgk.cqupt.edu.cn/"
  },
  {
    title: "教务在线",
    link: "http://jwzx.cqupt.edu.cn/"
  },
  {
    title: "研究生院",
    link: "http://yjs.cqupt.edu.cn/"
  },
  {
    title: "后勤服务",
    link: "http://cyhq.cqupt.edu.cn/"
  },
  {
    title: "图书馆",
    link: "http://lib.cqupt.edu.cn/"
  },
  {
    title: "科学研究",
    link: "http://www.cqupt.edu.cn/kxyj/kycg.htm"
  },
  {
    title: "学术期刊",
    link: "http://journal.cqupt.edu.cn/"
  },
  {
    title: "红岩网校",
    link: "http://hongyan.cqupt.edu.cn/"
  },
  {
    title: "校董会",
    link: "http://xdh.cqupt.edu.cn/"
  },
  {
    title: "基金会",
    link: "http://jyjjh.cqupt.edu.cn/"
  },
  {
    title: "校友联谊会",
    link: "http://xylyh.cqupt.edu.cn/"
  },
  {
    title: "教师主页",
    link: "http://faculty.cqupt.edu.cn/"
  },
  {
    title: "邮件系统",
    link: "http://mail.cqupt.edu.cn/"
  },
  {
    title: "招贤纳士",
    link: "http://rsc.cqupt.edu.cn/"
  },
  {
    title: "可视化校园",
    link: "http://gis.cqupt.edu.cn/"
  }
];
/**
 * 根据提供的索引打开相应的网址
 * @param index 索引值，用于确定要打开的网址
 */
function OnClicked(index: number) {
  let url = " "; // 初始化url为空字符串

  // 根据索引值设置对应的url
  if (index == 2) url = "https://www.cqupt.edu.cn/index/xsjz.htm";
  if (index == 3) url = "https://www.cqupt.edu.cn/index/xwgg.htm";

  // 在新窗口打开设定的url
  window.open(url);
}
</script>

<style lang="scss" scoped>
.show {
  display: block;
}
.un_show {
  display: none;
}
.second-cell {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.kuaisulianjie {
  width: 25%;
}
.xueshu {
  width: 25%;
}
.xiaowugonggao {
  width: 20%;
  justify-content: center;
}
.lianjie {
  display: flex;
  gap: 10px;
}
.left_button {
  width: 25%;
  min-width: 80px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
}
.right_button {
  width: 75%;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  gap: 10px;
}
@media screen and (max-width: 700px) {
  .second-cell {
    flex-direction: column;
    justify-content: center;
  }
  .kuaisulianjie {
    width: 100%;
  }
  .xueshu {
    width: 100%;
  }
  .xiaowugonggao {
    width: 100%;
    justify-content: center;
  }
  .lianjie {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .left_button {
    width: 100%;
    min-width: 80px;
    flex-flow: wrap;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
  }
  .right_button {
    width: 100%;
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    gap: 10px;
  }
}
</style>