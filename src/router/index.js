import Vue from 'vue'
import Router from 'vue-router'
// 组件导入后必须使用，否则编译会报错
// import HelloWorld from '@/components/HelloWorld'
import ManagerSQL from '@/components/ManagerSQL'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ManagerSQL',
      component: ManagerSQL
    }
  ]
})
