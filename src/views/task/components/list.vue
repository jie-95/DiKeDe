<template>
  <!-- //addr: "北京市-市辖区-昌平区-北京悦荟广场"
      // assignorId: 40
      // createTime: "2022-08-27T11:31:29"
      // createType: 1
      // desc: ""
      // expect: null
      // innerCode: "01000001"
      // productTypeId: 2
      // regionId: "1357163508105482242"
      // taskCode: "202208270010"
      // taskId: "2109"
      // taskStatus: 3
      // taskStatusTypeEntity: {statusId: 3, statusName: '取消'}
      // taskType: {typeId: 2, typeName: '补货工单', type: 2}
      // updateTime: "2022-08-27T12:08:17"
      // userId: 1
      // userName: "吴冠霖" -->
  <div>
    <el-table :data="tableData" style="width: 100%; background-color: #000">
      <el-table-column label="序号" type="index" width="90" />
      <el-table-column prop="taskCode" label="工单编号" width="180" />
      <el-table-column prop="innerCode" label="设备编号" width="180" />
      <el-table-column prop="taskType.typeName" label="工单类型" width="180" />
      <el-table-column prop="createType" label="工单方式" width="180" />
      <el-table-column prop="taskStatus" label="工单状态" width="180" />
      <el-table-column prop="userName" label="运营人员" width="180" />
      <el-table-column prop="createTime" label="创建日期" width="180" />
      <el-table-column
        label="操作"
      ><span style="color: #5f84ff">查看详情</span></el-table-column>
    </el-table>
    <!-- 分页 -->

    <el-row type="flex" justify="end" align="middle" style="height: 60px">
      <el-pagination
        v-if="total > 0"
        background
        layout="total, prev, pager, next, sizes"
        :current-page.sync="page.pageIndex"
        :page-size.sync="page.pageSize"
        :page-sizes="[5, 10, 15, 20]"
        :total="total"
        @current-change="getAllList"
        @size-change="getAllList"
      />
    </el-row>
    <!-- 分页 -->
  </div>
</template>

<script>
import { getTaskList } from '@/api/task'
export default {
  data() {
    return {
      tableData: [],
      page: {
        pageIndex: 1,
        pageSize: 10
      },
      total: ''
    }
  },
  mounted() {
    this.getAllList()
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    async getAllList() {
      try {
        const { data } = await getTaskList(this.page)
        console.log(data)
        this.tableData = data.currentPageRecords
        this.total = +data.totalCount
        if (+data.totalPage !== 0 && data.currentPageRecords.length === 0) {
          this.page.pageIndex = this.page.pageIndex - 1
          this.getAllList()
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
