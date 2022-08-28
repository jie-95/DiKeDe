<template>
  <div>
    <el-dialog title="收货地址" :visible.sync="dialogVisible">
      <el-row>
        <el-form>
          <el-col :span="12">
            <el-form-item label="活动名称">1234</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="活动名称">1234</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="活动名称">1234</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="活动名称">1234</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="活动名称">1234</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="活动名称">1234</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="活动名称">1234</el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="活动名称">1234</el-form-item>
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

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  border-radius: 4px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  //     background-color: #ccc;
  //   border-radius: 4px;
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
