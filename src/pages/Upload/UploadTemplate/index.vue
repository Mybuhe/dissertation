<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="上传模板" name="first">
              <el-table
                class="m-l-10"
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">

                <el-table-column
                    type="selection"
                    width="55">
                </el-table-column>

                <el-table-column
                    prop="name"
                    label="模板原始文件名"
                    width="120">
                </el-table-column>

                <el-table-column
                    prop="address"
                    label="学位"
                    show-overflow-tooltip>
                </el-table-column>

                <el-table-column
                    prop="address"
                    label="提交人"
                    show-overflow-tooltip>
                </el-table-column>

                <el-table-column
                    prop="address"
                    label="提交时间"
                    show-overflow-tooltip>
                </el-table-column>

                <el-table-column
                    prop="address"
                    label="状态"
                    show-overflow-tooltip>
                </el-table-column>

                <el-table-column
                    prop="address"
                    label="审核者ID"
                    show-overflow-tooltip>
                </el-table-column>

                <el-table-column
                    prop="address"
                    label="评审时间"
                    show-overflow-tooltip>
                </el-table-column>


                <el-table-column
                    prop="address"
                    label="审核备注说明"
                    show-overflow-tooltip>
                </el-table-column>
            </el-table>

        </el-tab-pane>
        <el-tab-pane label="我的模板" name="second">
            <el-button type="primary" class="m-l-10" >
                删除模板
            </el-button>
            <el-table
                class="m-l-10"
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">

                <el-table-column
                    type="selection"
                    width="55">
                </el-table-column>

                <el-table-column
                    prop="name"
                    label="模板原始文件名"
                    width="120">
                </el-table-column>

                <el-table-column
                    prop="address"
                    label="学位"
                    show-overflow-tooltip>
                </el-table-column>

                <el-table-column
                    prop="address"
                    label="提交人"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="提交时间"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="状态"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="审核者ID"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="评审时间"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="审核备注说明"
                    show-overflow-tooltip>
                </el-table-column>
            </el-table>
            
        </el-tab-pane>
  </el-tabs>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'second',
        tableData: []
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleSelectionChange(e){
      }
    }
  };
</script>

<style scoped>
    .m-l-10{
        margin-left: 10px;
    }
</style>