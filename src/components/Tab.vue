<template>
  <div>
    <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
      <el-tab-pane
        v-for="(item) in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >
        <div style="margin-bottom: 20px;" align="right">
          <el-button
            size="small"
            type="primary"
          >
            新建SQL
          </el-button>
        </div>
        <div>
          <el-table
            :data="tableData"
            border
            style="width: 100%" align="center" size="medium">
            <el-table-column
              prop="label"
              label="SQL标签"
            >
            </el-table-column>
            <el-table-column
              prop="remark"
              label="SQL概要"
            >
            </el-table-column>
            <el-table-column
              prop="sql"
              label="SQL语句"
            >
            </el-table-column>
            <el-table-column
              prop="creator"
              label="创建人"
            >
            </el-table-column>
            <el-table-column
              label="操作"
            >
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="medium">编辑</el-button>
                <el-button type="text" size="medium">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  data () {
    return {
      editableTabsValue: '',
      editableTabs: [{
        title: 'New Tab',
        name: ''
      }],
      tabIndex: 2,
      tableData: [{
        label: '查运单',
        remark: '查询运单号信息',
        sql: 'select * from cx_waybill;',
        creator: '小陈'
      }]
    }
  },
  props: ['dbName'],
  // watch: {
  //   dbName: function (val, oldval) {
  //     console.log(val, oldval)
  //   }
  // },
  mounted () {
    console.log(this.dbName)
  },
  methods: {
    addTab () {
      let newTabName = ++this.tabIndex + ''
      this.editableTabs.push({
        title: this.dbName,
        name: newTabName
      })
      this.editableTabsValue = newTabName
    },
    removeTab (targetName) {
      let tabs = this.editableTabs
      let activeName = this.editableTabsValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }
      this.editableTabsValue = activeName
      this.editableTabs = tabs.filter(tab => tab.name !== targetName)
    }
  }
}
</script>

<style scoped>

</style>
