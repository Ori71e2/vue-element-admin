<template>
  <div class="amap-container">
    <div class="amap-wrapper">
      <el-amap :vid="'amap-vue'" class="amap-box">
        <get-amap-instance @get-amap-instance="setAmapInstance"/>
        <custom-amap-select-poi @get-select-position="setSelectPoi" />
        <custom-amap-searchbox @select="selectSearch" />
      </el-amap>
      <div class="amap-panel">
        <el-row :gutter="20" type="flex" class="row-bg" justify="space-around">
          <el-col :span="4"><amap-limit-lock :amap-instance="amapInstance" /></el-col>
          <el-col :span="4"><amap-tools-control :amap-instance="amapInstance" /></el-col>
          <el-col :span="6"><amap-select-poi :amap-instance="amapInstance" :select-poi="selectPoi" /></el-col>
          <el-col :span="4"><amap-driving-nav :amap-instance="amapInstance" :panel-id="panelId" :select-poi="selectPoi" /></el-col>
          <el-col :span="4"><amap-geometry :amap-instance="amapInstance" :select-poi="selectPoi" /></el-col>
        </el-row>
      </div>
      <amap-geolocation :amap-instance="amapInstance" />
      <div ref="drivingNavPanel" class="driving-nav-panel"/>
    </div>
  </div>
</template>

<script>
import getAmapInstance from './components/amap-custom/GetAmapInstance'
import customAmapSearchbox from './components/amap-custom/Search'
import customAmapSelectPoi from './components/amap-custom/SelectPoi'

import amapToolsControl from './components/amap-panel/AmapToolsControl'
import amapGeolocation from './components/amap-panel/AmapGeolocation'
import amapSelectPoi from './components/amap-panel/AmapSelectPoi'
import amapDrivingNav from './components/amap-panel/AmapDrivingNav'
import amapLimitLock from './components/amap-panel/AmapLimitLock'
import amapGeometry from './components/amap-panel/AmapGeometry'
import VueAMap from 'vue-amap'

import Vue from 'vue'
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  center: [118.716184, 33.720615],
  resizeEnable: true,
  zoom: 13,
  // 高德key
  key: '4e4c8706ad7f1d468011d7b1d2340bf2',
  uiVersion: '1.0.11'
})

export default {
  components: {
    customAmapSearchbox, customAmapSelectPoi, getAmapInstance,
    amapToolsControl, amapGeolocation, amapSelectPoi, amapDrivingNav, amapLimitLock, amapGeometry
  },
  data() {
    return {
      amapInstance: null,
      panelId: '',
      selectPoi: null,
      position: [118.716184, 33.720615],
      zoom: 14
    }
  },
  mounted() {
    this.panelId = this.$refs.drivingNavPanel
  },
  methods: {
    setAmapValue() {
      // console.log('loaded')
    },
    selectSearch(poi) {
      console.log(poi)
      const { location, name, adcode, district, address } = poi
      const center = [location.lng, location.lat]
      console.log(center)
      this.selectMarker = {
        label: { content: `<div>
          <div>${name}</div>
          <div>${adcode}</div>
          <div>${district}</div>
          <div>${address}</div>
        </div>`, offset: [20, 20] }, position: [...center]
      }
      // console.log(this.selectMarker)
      this.center = center
    },
    setAmapInstance(amap) {
      // console.log('get amap instance')
      // console.log(amap)
      this.amapInstance = amap
    },
    setSelectPoi(poi) {
      this.selectPoi = poi
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
.custom-componet-input {
  position: absolute;
  width: 100%;
  height: 100%;
}
.tip {
    background-color: #ddf;
    color: #333;
    border: 1px solid silver;
    box-shadow: 3px 4px 3px 0px silver;
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 5px;
    overflow: hidden;
    line-height: 20px;
    z-index: 99;
}
.tip input {
    height: 25px;
    border: 0;
    padding-left: 5px;
    width: 280px;
    border-radius: 3px;
    outline: none;
}
.amap-tools-control {
    position: absolute;
    bottom: 10px;
    right: 10px;
}
.amap-panel{
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%);
}
.driving-nav-panel {
  position: fixed;
  background-color: white;
  max-height: 70%;
  overflow-y: auto;
  top: 25%;
  right: 1%;
  width: 14.5%;
}
</style>
