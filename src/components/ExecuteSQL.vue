<template>
  <el-container>
    <el-container>
      <el-header>
        <div class='el-form--inline' align="left">
          <el-select v-model="group" filterable clearable placeholder="运维组" class="select-header-width"
                     @change="addTab(editableTabsValue2)">
            <el-option
              v-for="item in groupList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <label style="padding-right: 8px"></label>
          <el-select v-model="sys" filterable clearable placeholder="系统" class="select-header-width"
                     @change="addTab(editableTabsValue2)">
            <el-option
              v-for="item in sysList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <label style="padding-right: 8px"></label>
          <el-select v-model="db" filterable clearable placeholder="数据库" class="select-header-width"
                     @change="addTab(editableTabsValue2)">
            <el-option
              v-for="item in dbList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-header>

      <el-main>
        <div>
          <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
            <el-tab-pane
              v-for="(item) in editableTabs2"
              :key="item.name"
              :label="item.title"
              :name="item.name"
            >
            </el-tab-pane>
          </el-tabs>
        </div>
        <el-aside width="200px">
          <div class="el-form--inline" align="left">
            <router-link class="tag-width" to="">全部标签</router-link>
            <label style="padding-right: 8px"></label>
            <router-link class="tag-width" to="">查运单</router-link>
            <label style="padding-right: 8px"></label>
            <router-link class="tag-width" to="">查权限</router-link>
            <label style="padding-right: 8px"></label>
            <router-link class="tag-width" to="">查订单</router-link>
          </div>
          <hr>
          <div>
            <el-input
              placeholder="输入关键字进行过滤"
              v-model="filterText">
            </el-input>

            <el-tree
              class="filter-tree"
              :data="data2"
              :props="defaultProps"
              default-expand-all
              :filter-node-method="filterNode"
              ref="tree2">
            </el-tree>
          </div>
        </el-aside>
        <div>
          <label></label>
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
  </el-container>
</template>

<script>export default {
  data () {
    return {
      editableTabsValue2: '2',
      editableTabs2: [{
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content'
      }, {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content'
      }],
      tabIndex: 2,
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
      sql: '',
      filterText: '',
      data2: [{
        id: 1,
        label: 'select',
        children: [{
          id: 9,
          label: 'SGS通过waybill_no(运单号)查询信息'
        }, {
          id: 10,
          label: 'SGS通过waybill_no(运单号)查询信息'
        }
        ]
      }, {
        id: 2,
        label: 'update',
        children: []
      }, {
        id: 3,
        label: 'insert',
        children: []
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },

  watch: {
    filterText (val) {
      this.$refs.tree2.filter(val)
    }
  },

  methods: {
    addTab (targetName) {
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

    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tag-width {
    width: 50px;
    text-decoration: none;
  }
</style>
