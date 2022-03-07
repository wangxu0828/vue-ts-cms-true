<template>
  <div class="account-login-container">
    <el-form :model="account" :rules="rules" label-width="60px" ref="formRef">
      <el-form-item label="账号" prop="account">
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
import 'element-plus/theme-chalk/el-form.css'
const account = ref({
  name: '',
  password: ''
})
const formRef = ref<InstanceType<typeof ElForm>>()

const login = () => {
  formRef.value?.validate((res) => {
    console.log(res)
  })
}

defineExpose({
  login
})
</script>

<style lang="less" scoped></style>
