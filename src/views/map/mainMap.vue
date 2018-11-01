<template>
  <div class="amap-container">
    <div class="amap-wrapper">
      <el-amap :vid="'amap-vue'" class="amap-box">
        <el-amap-marker :position="position" vid="component-marker" />
        <custom-map-fishing-spot-markers
          :data="markerData"
          :get-position="markerOptions.getPosition"
          :get-hover-title="markerOptions.getHoverTitle"
          :visible="markerOptions.visible"
          :render-options="markerOptions.renderOptions"
          :events="markerOptions.events" />
        <custom-map-searchbox @select="selectSearch" />
      </el-amap>
    </div>
  </div>
</template>

<script>
import customMapFishingSpotMarkers from './components/FishingSpot'
import customMapSearchbox from './components/Search'
import VueAMap from 'vue-amap'
import Vue from 'vue'
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  center: [118.716184, 33.720615],
  resizeEnable: true,
  zoom: 13,
  // 高德key
  key: '4e4c8706ad7f1d468011d7b1d2340bf2',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Geolocation'],
  uiVersion: '1.0.11'
})
const center = [121.5273285, 31.21515044]
const markerData = Array.from({ length: 10000 }, (x, index) => ({ position: [
  center[0] + (Math.random() > 0.5 ? 1 : -1) * Math.random() * 0.6,
  center[1] + (Math.random() > 0.5 ? 1 : -1) * Math.random() * 0.6
], title: `小点坐标-${index}` }))

export default {
  components: { customMapFishingSpotMarkers, customMapSearchbox },
  data() {
    return {
      position: [118.716184, 33.720615],
      zoom: 14,
      center,
      markerData,
      markerOptions: {
        visible: true,
        getPosition(dateItem) {
          return dateItem.position
        },
        getHoverTitle(dateItem) {
          return dateItem.title
        },
        renderOptions: {
          pointStyle: {
            contentImg: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b1.png',
            width: 19,
            height: 31,
            offset: ['-50%', '-100%'],
            fillStyle: null,
            strokeStyle: null
          }
        },
        events: {
          pointClick(e, point) {
            console.log('event pointClick', e, point)
          },
          pointMouseover(e, point) {
            console.log('event pointMouseover', e, point)
          },
          pointMouseout(e, point) {
            console.log('event pointMouseout', e, point)
          }
        }
      }
    }
  },
  mounted: () => {
    console.log('mainMap')
  },
  methods: {
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
      console.log(this.selectMarker)
      this.center = center
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
</style>
