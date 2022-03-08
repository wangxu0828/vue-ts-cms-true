<template>
  <div class="container">
    <el-container>
      <el-aside :width="isFolding ? '60px' : '200px'">
        <navMenu :isFolding="isFolding"></navMenu>
      </el-aside>
      <el-container>
        <el-header>
          <nav-header
            :isFolding="isFolding"
            @ChangeFold="ChangeFold"
          ></nav-header>
        </el-header>
        <el-main>
          <div class="page-content">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useStore } from '@/store'
import navMenu from '@/components/nav-menu'
import navHeader from '@/components/nav-header'
import { mapMenuToRoute } from '@/utils'

const store = useStore()

const userMenus = computed(() => {
  return store.state.login.userMenus
})

mapMenuToRoute(userMenus.value)

const isFolding = ref(false)

const ChangeFold = () => {
  isFolding.value = !isFolding.value
}
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  .page-content {
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
  }
}
::v-deep .el-container {
  height: 100%;
  .el-header,
  .el-footer {
    display: flex;
    color: #333;
    text-align: center;
    align-items: center;
  }

  .el-header {
    height: 48px !important;
  }

  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #001529;
    transition: width 0.3s linear;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .el-main {
    color: #333;
    text-align: center;
    background-color: #f0f2f5;
  }
}
</style>
