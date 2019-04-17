<!--子组件获取父组件传递参数、调用父组件方法-->
<template>
    <div>
      <h1>子组件</h1>
      <button @click="sendMessageToParent">向父组件传值</button>
    </div>
</template>

<script>
export default {
  name: 'Child',
  data () {
    return {
      msg: '子组件'
    }
  },
  props: ['parentArgs'],
  methods: {
    callChild () {
      console.log('parent invoke child')
      alert(this.parentArgs)
    },
    sendMessageToParent () {
      this.$emit('listenToChildEvent', '这是子组件传递的消息')
    }

  }
}
</script>

<style scoped>

</style>
