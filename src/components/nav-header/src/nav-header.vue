<template>
  <div class="nav-header-container">
    <div class="Hamburg" @click="handleClickChangeFold">
      <el-icon class="icon" v-if="props.isFolding"><expand /></el-icon>
      <el-icon class="icon" v-else><fold /></el-icon>
    </div>

    <div class="other">
      <div class="breadcrumbs">
        <breadcrumb></breadcrumb>
      </div>
      <div class="operation">
        <el-dropdown>
          <span class="el-dropdown-link">
            {{ $store.state.login.userInfo.name }}
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item divided @click="handleClickLeave">
                <el-icon><Close /></el-icon>
                退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, defineEmits } from 'vue'
import { Expand, Fold, ArrowDown, Close } from '@element-plus/icons-vue'
import store from '@/store'
import breadcrumb from './breadcrumb.vue'

const emit = defineEmits<{ (event: 'ChangeFold'): void }>()

const props = withDefaults(defineProps<{ isFolding?: boolean }>(), {
  isFolding: false
})

const handleClickChangeFold = () => {
  emit('ChangeFold')
}

const handleClickLeave = () => {
  store.dispatch('login/leaveAction')
}
</script>

<style lang="less" scoped>
.nav-header-container {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  .Hamburg {
    width: 30px;
    height: 30px;
    cursor: pointer;
    .icon {
      width: 100%;
      height: 100%;
      color: #000;
    }
  }
  .other {
    flex: 1;
    display: flex;
    justify-content: space-between;
    .breadcrumbs {
      margin-left: 20px;
      cursor: pointer;
    }
    .operation {
      cursor: pointer;
      margin-right: 30px;
    }
  }
  ::v-deep .el-dropdown--default {
    display: flex;
    align-items: center;
  }
}
</style>
