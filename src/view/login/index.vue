<template>
  <div class="login_container">
    <login-panel></login-panel>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
import loginPanel from './components/login-panel.vue'
</script>

<style lang="less" scoped>
.login_container {
  height: 100%;
  background-image: url('@/assets/img/login-bg.svg');
}
</style>
