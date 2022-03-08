<template>
  <div class="container">
    <div class="search">
      <el-form label-width="120px">
        <el-row>
          <el-col :span="8">
            <el-form-item label="id">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="用户名">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="真实姓名">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="电话号码">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="用户状态">
              <el-select style="width: 100%">
                <el-option>1</el-option>
                <el-option>1</el-option>
                <el-option>1</el-option>
                <el-option>1</el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="创建时间">
              <el-input size="large"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="table"></div>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
</script>

<style lang="less" scoped>
</style>
