<template>
  <!-- 使用el-config-provider组件设置命名空间为"ep"，为内部元素提供全局配置 -->
  <el-config-provider namespace="ep">
    <div>
      <!-- 路由视图，用于渲染对应的路由组件，不用修改 -->
      <router-view />
    </div>
  </el-config-provider>
</template>

<style>
/* 页面根元素的样式，居中显示，颜色使用主题色，宽度占满屏幕 */
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
  width: 100%;
}

/* 主容器样式，高度计算公式减去了菜单项高度和3px，以充分利用垂直空间 */
.main-container {
  height: calc(100vh - var(--ep-menu-item-height) - 3px);
}
</style>