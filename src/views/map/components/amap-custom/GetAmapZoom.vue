<template>
  <div/>
</template>
<script>
import { createCustomComponent } from 'vue-amap'
const getAmapZoom = createCustomComponent({
  name: 'get-amap-zoom',
  data() {
    return {
      amap: null,
      amapZoom: 0,
      marker: null
    }
  },
  init(options, map) {
    this.marker = new window.AMap.Marker({
      position: [0, 0]
    })
    this.amap = this.$amap
    this.amapZoom = this.amap.getZoom()
    this.$emit('get-amap-zoom', this.amapZoom)
    return this.marker
  },
  mounted: () => {
  },
  contextReady() {
  }
})
export default getAmapZoom
</script>
