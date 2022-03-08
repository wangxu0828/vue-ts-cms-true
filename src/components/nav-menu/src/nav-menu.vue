<template>
  <div class="nav-menu-container">
    <div class="aside-header">
      <img src="~@/assets/img/logo.svg" alt="" />
      <h2 class="title" v-if="!props.isFolding">VUE+TS</h2>
    </div>
    <el-menu
      active-text-color="#0a60bd"
      background-color="#0c2135"
      class="el-menu-vertical-demo"
      :default-active="$store.state.login.currentPath"
      text-color="rgb(183, 189, 195)"
      router
      :collapse="props.isFolding"
      unique-opened
    >
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.url">
            <template #title>
              <!-- <i :class="item.icon.split('-')[2]"></i> -->
              <!-- <i v-if="item.icon" :class="item.icon"></i> -->
              <!-- <location>
                <icon :class="item.icon.split('-')[2]"> </icon>
              </location> -->
              <el-icon v-if="item.name === '系统总览'"><Monitor /></el-icon>
              <el-icon v-else-if="item.name === '系统管理'"
                ><Setting
              /></el-icon>
              <el-icon v-else-if="item.name === '商品中心'"><Goods /></el-icon>
              <el-icon v-else-if="item.name === '随便聊聊'"
                ><ChatRound
              /></el-icon>
              <!-- {{ item.icon.split('-')[2] }} -->
              <span> {{ item.name }}</span>
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
import { computed, withDefaults, defineProps } from 'vue'
import { useStore } from '@/store'
import { Monitor, Setting, Goods, ChatRound } from '@element-plus/icons-vue'
const store = useStore()
const userMenus = computed(() => {
  return store.state.login.userMenus
})

const props = withDefaults(
  defineProps<{
    isFolding?: boolean
  }>(),
  {
    isFolding: false
  }
)
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
  width: 100%;
  height: calc(100% - 48px);
}
::v-deep .el-menu--collapse .is-active .el-icon {
  color: pink;
}
</style>
