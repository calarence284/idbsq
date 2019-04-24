<template>
  <div class="hello">
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4}"
      placeholder="请输入内容"
      v-model="textarea" @blur="filterSqlParms">
    </el-input>
    <el-button @click="add">配置SQL变量值</el-button>
    <el-table :data="data">
      <el-table-column prop="name" label="变量名称">
        <template slot-scope="scope">
          <el-input v-model="data[scope.$index].name"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="value" label="变量值">
        <template slot-scope="scope">
          <el-input v-model="data[scope.$index].value"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="age" label="操作">
        <template slot-scope="scope">
          <el-button @click="deleteRow(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import http from '../utils/http'
  import api from '../utils/api'

  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        data: [],
        textarea: ''
      }
    },
    // mounted: function () {
    //   this.fetchData()
    // },
    methods: {
      // fetchData: async function () {
      //   let params = {}
      //   const res = await http.get(api.right, params)
      //   if (res.data.success) {
      //     console.log(res.data)
      //     alert('请求成功')
      //   }
      // },
      filterSqlParms () {
        let regex = /\{(.+?)\}/g
        if (this.textarea === '') {
          this.data = []
        } else {
          for (let i of this.textarea.match(regex)) {
            let tmp = {
              name: '',
              value: ''
            }
            tmp.name = i.slice(1, -1)
            this.data.push(tmp)
          }
        }
      },
      add () {
      },
      deleteRow (index) {
        this.data.splice(index, 1)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
