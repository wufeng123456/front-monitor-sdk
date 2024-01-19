<template>
  <div>
    <h1>错误日志</h1>
    <!-- 主动捕获 -->
    <button
      :style="{'margin-right': '20px'}"
      @click="handleErrorCaptcher"
    >
      主动捕获
    </button>
    <!-- trycatch无法捕获异步错误 -->
    <button
      :style="{'margin-right': '20px'}"
      @click="handleAsyncErrorCaptcher"
    >
      异步错误
    </button>
    <!-- jsError -->
    <button
      :style="{'margin-right': '20px'}"
      @click="handleJsError"
    >
      jsError
    </button>
    <!-- promiseError -->
    <button
      :style="{'margin-right': '20px'}"
      @click="handlePromiseError"
    >
      promiseError
    </button>
    <!-- resourceError -->
    <button
      :style="{'margin-right': '20px'}"
      @click="handleResourceError"
    >
      resourceError
    </button>
    <img v-if="show" src="localhost:8000/images/test.png" alt="" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { errorCaptcher } from 'front-monitor-api'
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
})
// try catch主动捕获
const handleErrorCaptcher = () => {
  try {
    let str = '11111'
    str.map()
  } catch (error) {
    errorCaptcher(error, error.message)
  }
}
// try catch无法捕获异步错误
const handleAsyncErrorCaptcher = () => {
  try {
    setTimeout(() => {
      let str = '11111'
      str.map()
    }, )
  } catch (error) {
    errorCaptcher(error, error.message)
  }
}
// jsError
const handleJsError = () => {
  let str = '11111'
  str.filter()
}
// promiseError
const handlePromiseError = () => {
  Promise.reject('promise出错了')
}
// resourceError
let show = ref(false)
const handleResourceError = () => {
  show.value = true
}


</script>
<style>
</style>