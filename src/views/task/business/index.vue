<template>
  <div class="main">
    <!-- 顶部搜索栏 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="工单编号">
        <el-input v-model="formInline.taskCode" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="工单状态">
        <el-select v-model="formInline.status" placeholder="请选择">
          <el-option label="待办" value="1" />
          <el-option label="进行" value="2" />
          <el-option label="取消" value="3" />
          <el-option label="完成" value="4" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <!-- 顶部搜索栏 -->

    <!-- 列表区域 -->
    <List />
    <!-- 列表区域 -->
  </div>
</template>

<script>
import List from '../components/list.vue'
export default {
  components: {
    List
  },
  data() {
    return {
      formInline: {
        taskCode: '',
        status: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(this.formInline)
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  padding: 20px;
}
.demo-form-inline {
  height: 80px;
  align-items: center;
  padding: 20px;

  margin-bottom: 20px;
  padding-left: 17px;
  -webkit-box-align: center;
  background-color: #fff;
}
</style>
