<template>
  <el-container>
    <el-header>
  <div class='el-form--inline' align="left">
    <el-select v-model="group" filterable clearable placeholder="运维组" class="select-header-width" @change="getSysList">
      <el-option
        v-for="item in groupList"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <label style="padding-right: 8px"></label>
    <el-select v-model="sys" filterable clearable placeholder="系统" class="select-header-width" @change="getDbList">
      <el-option
        v-for="item in sysList"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <label style="padding-right: 8px"></label>
    <el-select v-model="db" filterable clearable placeholder="数据库" class="select-header-width" @change="addChildTab">
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
  <tab :db-name="db"  ref="tab"></tab>
  </el-main>
  </el-container>
</template>

<script>
import Tab from './Tab'
export default {
  name: 'Header',
  data () {
    return {
      group: '',
      sys: '',
      db: '',
      groupList: [{
        value: '',
        label: ''
      }],
      sysList: [{
        value: '',
        label: ''
      }],
      dbList: [{
        value: '',
        label: ''
      }]
    }
  },
  components: {
    tab: Tab
  },
  methods: {
    getSysList () {
      this.sysList.push({
        value: '2',
        label: 'CCSP'
      })
    },
    getDbList () {
      this.dbList.push({
        value: 'CX_READ',
        label: 'CX_READ'
      })
      this.dbList.push({
        value: 'CCSPBASE',
        label: 'CCSPBASE'
      })
    },
    addChildTab () {
      console.log('调用子组件')
      this.$refs.tab.addTab()
    }
  },
  mounted () {
    this.groupList.push({
      value: '1',
      label: '互联网运维组'
    })
  }
}
</script>

<style scoped>

</style>
