import Vue from 'vue'
import Router from 'vue-router'
// 组件导入后必须使用，否则编译会报错
// import HelloWorld from '@/components/HelloWorld'
import ManagerSQL from '@/components/ManagerSQL'
import ExecuteSQL from '@/components/ExecuteSQL'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/managersql'
    },
    {
      path: '/managersql',
      component: ManagerSQL
    },
    {
      path: '/querysql',
      component: ExecuteSQL
    }
  ]
})
