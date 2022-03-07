<template>
  <div class="login_panel_container">
    <h1>后台管理系统</h1>
    <el-tabs type="border-card" stretch class="demo-tabs" v-model="active">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><user /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <account-login ref="accountRef"></account-login>
      </el-tab-pane>
      <el-tab-pane name="phone" label="Config">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><PhoneFilled /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        Route
      </el-tab-pane>
    </el-tabs>
    <div class="operation">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <div class="submit">
      <el-button
        type="primary"
        class="submit"
        size="large"
        @click="handleClickLogin"
        >点击登录</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { User, PhoneFilled } from '@element-plus/icons-vue'
import accountLogin from './account-login.vue'
const accountRef = ref<InstanceType<typeof accountLogin>>()
const active = ref('account')

const isKeepPassword = ref(true)

const handleClickLogin = () => {
  accountRef.value.login()
}
</script>

<style lang="less" scoped>
.login_panel_container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 320px;
  margin: auto;
  .demo-tabs {
    width: 320px;
  }
  .operation {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .submit {
    width: 100%;
  }
}
</style>
