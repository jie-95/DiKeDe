<template>
  <div class="boseBox">
    <el-dialog
      class="dialogTitle"
      title="收货地址"
      :visible.sync="dialogVisible"
      width="40%"
    >
      <el-row class="task-status" />

      <el-row>
        <el-form>
          <el-col :span="12">
            <el-form-item label="设备编号：">1234</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="创建日期：">1234</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="取消日期：">1234</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="运营人员：">1234</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="工单类型：">1234</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="补货数量：">1234</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="工单方式：">1234</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="取消原因：">1234</el-form-item>
          </el-col>
        </el-form>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeDialogVisible">取 消</el-button>
        <el-button type="primary" @click="closeDialogVisible">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      gridData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    closeDialogVisible() {
      this.$emit('update:dialogVisible', false)
    }
  }
}
</script>
<style>
.el-dialog__body {
  padding: 0 20px ;
}
</style>
<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  padding: 0 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.task-status {
  // border-radius: 20px;
  background-color: #606266;
  height: 54px;
}
.el-col {
  //     background-color: #ccc;
  //   border-radius: 4px;
  line-height: 36px;
  & .el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
