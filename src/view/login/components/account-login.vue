<template>
  <div class="account-login-container">
    <el-form :model="account" :rules="rules" label-width="60px" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, defineExpose } from 'vue'
import { rules } from '../config/index'
import { ElForm } from 'element-plus/es/components/form/index'
import { ElMessage } from 'element-plus/es'
import 'element-plus/theme-chalk/el-form.css'
import { cache } from '@/utils'
import store from '@/store'

const account = ref({
  name: cache.getCache('name') || '',
  password: cache.getCache('password') || ''
})
const formRef = ref<InstanceType<typeof ElForm>>()

const login = (isKeepPassword) => {
  formRef.value?.validate((res) => {
    if (isKeepPassword) {
      cache.setCache('name', account.value.name)
      cache.setCache('password', account.value.password)
    }

    if (res) {
      store.dispatch('login/loginAction', account.value)
    } else {
      ElMessage.warning('请输入正确格式的账号密码')
    }
  })
}

defineExpose({
  login
})
</script>

<style lang="less" scoped></style>
