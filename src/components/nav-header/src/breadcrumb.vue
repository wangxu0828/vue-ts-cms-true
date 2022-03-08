<template>
  <div class="breadcrumb-container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item in breadCrumbList" :key="item.name">{{
        item.name
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import mapRouteToBreadCrumb from '@/utils/mapRouteToBreadcrumb'

const breadCrumbList = computed(() => {
  const route = useRoute()
  const store = useStore()
  const userMenus = store.state.login.userMenus
  const currentPath = route.path
  return mapRouteToBreadCrumb(userMenus, currentPath)
})
</script>

<style lang="less" scoped></style>
