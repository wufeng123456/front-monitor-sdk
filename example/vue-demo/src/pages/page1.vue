<template>
  <div>
    <h1>行为日志</h1>
    <!-- 手动埋点 -->
    <button
      :style="{'margin-right': '20px'}"
      data-no="yes"
      @click="() => actionTrackerReport('button', '手动埋点被点击了')"
    >
      手动埋点
    </button>
    <!-- 属性埋点 -->
    <button
      data-target="属性埋点被点击了"
      :style="{'margin-right': '20px'}"
    >
    属性埋点
    </button>
    <!-- 自动埋点 -->
    <button>
      自动埋点
    </button>
  </div>
</template>

<script setup>
import { actionTrackerReport } from 'front-monitor-api'
import { onMounted } from 'vue'
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
})

</script>
<style>
</style>