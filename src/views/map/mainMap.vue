<template>
  <div class="amap-container">
    <div class="amap-wrapper">
      <el-amap :vid="'amap-vue'" class="amap-box"/>
    </div>
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

<style scoped>
.amap-container {
  position: absolute;
  width: 99%;
  height: 98%;
  margin: 0.5%;
}

.amap-wrapper {
  width: 100%;
  height: 100%;
}

.amap_box {
  width: 100%;
  height: 100%;
}
</style>
