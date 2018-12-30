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
      marker: null
    }
  },
  init(options, map) {
    this.marker = new window.AMap.Marker({
      position: [0, 0]
    })
    this.amap = this.$amap
    this.$emit('get-amap-zoom', this.amap)
    return this.marker
  },
  mounted: () => {
  },
  contextReady() {
  }
})
export default getAmapZoom
</script>
