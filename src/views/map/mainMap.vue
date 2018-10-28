<template>
  <div class="amap-container">
    <el-amap />
  </div>
</template>

<script>
import Vue from 'vue'
import VueAMap from 'vue-amap'
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  center: [118.716184, 33.720615],
  resizeEnable: true,
  zoom: 13,
  // 高德key
  key: '4e4c8706ad7f1d468011d7b1d2340bf2',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Geolocation']
})
export default {
  data() {
    return {

    }
  }
}
</script>

<style>
.amap-container {
  width: 500px;
  height: 500px;
}
</style>
