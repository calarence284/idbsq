<template>
  <el-container>
    <el-header>
      <div class='el-form--inline'>
        <el-select v-model="group" filterable clearable placeholder="运维组" class="select-header-width">
          <el-option
            v-for="item in groupList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <label style="padding-right: 8px"></label>
        <el-select v-model="sys" filterable clearable placeholder="系统" class="select-header-width">
          <el-option
            v-for="item in sysList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <label style="padding-right: 8px"></label>
        <el-select v-model="db" filterable clearable placeholder="数据库" class="select-header-width">
          <el-option
            v-for="item in dbList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <label style="padding-right: 8px"></label>
        <el-select v-model="label" filterable clearable placeholder="SQL标签" class="select-header-width">
          <el-option
            v-for="item in labelList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <i class="el-icon-circle-plus-outline" size="large"></i>
        <label style="padding-right: 40px"></label>
        <el-select v-model="sql" filterable clearable placeholder="SQL语句" class="select-header-width">
          <el-option
            v-for="item in sqlList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </el-header>
    <br>
    <el-main>
      <div>
        <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
          <el-tab-pane
            v-for="(item) in editableTabs2"
            :key="item.name"
            :label="item.title"
            :name="item.name"
          >
            <div style="margin-bottom: 20px;" class='el-form--inline' align="right">
              <el-button
                fixed="right"
                type="primary"
                @click="addTab(editableTabsValue2)"
                v-buttonSize="100"
              >
                新建SQL
              </el-button>
              <el-select v-model="value" placeholder="批量导入" class="select-width">
                <el-option
                  v-for="item in batchInList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-select v-model="value" placeholder="批量导出" class="select-width">
                <el-option
                  v-for="item in batchOutList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <!--<div align="center">-->
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
            <!--</div>-->
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-main>
    <el-footer>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </div>
    </el-footer>
  </el-container>
</template>

<script src="../router/index.js"></script>
<script>export default {
  data () {
    return {
      batchInList: [{
        value: '1',
        label: '批量导入SQL文件'
      }, {
        value: '2',
        label: '批量导入CSV文件'
      }],
      batchOutList: [{
        value: '10000',
        label: '批量导出（10000条）数据'
      }, {
        value: '20000',
        label: '批量导出（20000条）数据'
      }],
      groupList: [{
        value: '1',
        label: '互联网运维组'
      }, {
        value: '2',
        label: '中间件组'
      }],
      sysList: [{
        value: '1',
        label: 'CX'
      }, {
        value: '2',
        label: 'SGS'
      }],
      dbList: [{
        value: '1',
        label: 'ccspbase'
      }, {
        value: '2',
        label: 'ccspwx'
      }],
      labelList: [{
        value: '1',
        label: '查运单'
      }, {
        value: '2',
        label: '查订单'
      }],
      sqlList: [{
        value: '1',
        label: 'select * from cx_waybill limit 1;'
      }, {
        value: '2',
        label: 'select * from cx_waybill limit 5;'
      }],
      group: '',
      sys: '',
      db: '',
      label: '',
      sql: '',
      editableTabsValue2: '2',
      editableTabs2: [{
        title: 'CX',
        name: '1'
      }, {
        title: 'SGS',
        name: '2'
      }],
      tabIndex: 1,
      tableData: [{
        label: '查运单',
        remark: '查询运单号信息',
        sql: 'select * from cx_waybill;',
        creator: '小陈'
      }],
      currentPage4: 4
    }
  },
  methods: {
    // targetName
    addTab () {
      let newTabName = ++this.tabIndex + ''
      this.editableTabs2.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content'
      })
      this.editableTabsValue2 = newTabName
    },
    removeTab (targetName) {
      let tabs = this.editableTabs2
      let activeName = this.editableTabsValue2
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
      this.editableTabsValue2 = activeName
      this.editableTabs2 = tabs.filter(tab => tab.name !== targetName)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
  .select-width {
    width: 100px;
  }
  .select-header-width {
    width: 275px;
  }
</style>
