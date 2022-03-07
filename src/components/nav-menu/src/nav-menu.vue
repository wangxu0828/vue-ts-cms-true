<template>
  <div class="nav-menu-container">
    <div class="aside-header">
      <img src="~@/assets/img/logo.svg" alt="" />
      <h2 class="title">VUE+TS</h2>
    </div>
    <el-menu
      active-text-color="#fff"
      background-color="#0c2135"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="rgb(183, 189, 195)"
    >
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.url">
            <template #title>
              <el-icon><Location /></el-icon>
              {{ item.name }}
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.url">{{
                subitem.name
              }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-if="item.type === 2">
          <el-menu-item :index="item.url">{{ item.name }}</el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'
import { Location } from '@element-plus/icons-vue'
const store = useStore()
const userMenus = computed(() => {
  return store.state.login.userMenus
})
console.log(userMenus.value)
</script>

<style lang="less" scoped>
.aside-header {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 10px 8px 10px;
  img {
    width: 28px;
    height: 28px;
    margin: 0 10px;
  }
  .title {
    color: #fff;
  }
}

.el-menu {
  border-right: none;
}

// 目录
.el-submenu {
  background-color: #001529 !important;
  // 二级菜单 ( 默认背景 )
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135 !important;
  }
}

::v-deep .el-submenu__title {
  background-color: #001529 !important;
}

// hover 高亮
.el-menu-item:hover {
  color: #fff !important; // 菜单
}

.el-menu-item.is-active {
  color: #fff !important;
  background-color: #0a60bd !important;
}

.el-menu-vertical:not(.el-menu--collapse) {
  // width: 100%;
  // height: calc(100% - 48px);
}
</style>
