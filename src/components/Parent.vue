<!--父组件向子组件传参、调用子组件方法-->
<template>
    <div>
      <h1>{{ msg }}</h1>
      <button @click="parentInvokeChild" >父组件调用子组件</button>
      <Child ref="mychild" parent-args="hhh" @listenToChildEvent="showMsgFromChild"></Child>
    </div>
</template>

<script>
import Child from './Child'
export default {
  name: 'Parent',
  data () {
    return {
      msg: '父组件'
    }
  },
  components: {
    Child
  },
  methods: {
    parentInvokeChild () {
      this.$refs.mychild.callChild(this.msg)
    },
    showMsgFromChild (data) {
      alert(data)
    }
  }
}
</script>

<style scoped>

</style>
