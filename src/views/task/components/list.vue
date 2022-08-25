<template>
  <div>
    <el-table :data="tableData" style="width: 100%; background-color: #000">
      <el-table-column label="序号" type="index" width="90" />
      <el-table-column prop="date" label="工单编号" width="180" />
      <el-table-column prop="date" label="设备编号" width="180" />
      <el-table-column prop="date" label="工单类型" width="180" />
      <el-table-column prop="date" label="工单方式" width="180" />
      <el-table-column prop="date" label="工单状态" width="180" />
      <el-table-column prop="date" label="运营人员" width="180" />
      <el-table-column prop="name" label="创建日期" width="180" />
      <el-table-column label="操作"><span>查看详情</span></el-table-column>
    </el-table>
    <!-- 分页 -->

    <el-row type="flex" justify="end" style="height: 80px" align="middle">
      <!-- <el-pagination
        layout="prev,next"
        :total="100"
        prev-text="上一页"
        next-text="下一页"
        @current-change="changePage"
        @size-change="changeSize"
      /> -->
      <el-pagination
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-row>
    <button @click="getAlist">获取列表</button>
    <!-- 分页 -->
  </div>
</template>

<script>
import { getAllTaskStatus } from '@/api/task'
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  mounted() {
    this.getAlist()
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    async getAlist() {
      const res = await getAllTaskStatus()
      console.log(res)
    }
  }
}
</script>

<style lang="scss" scoped></style>
