<template>
  <div/>
</template>
<script>
import { createCustomComponent } from 'vue-amap'
const getMapInstance = createCustomComponent({
  data() {
    return {
      'amap': null
    }
  },
  init(options, map) {
    var marker = new window.AMap.Marker({
      position: [121.59996, 31.177646]
    })
    this.amap = this.$amap
    this.$emit('get-amap-instance', this.amap)
    return marker
  },
  mounted: () => {
  },
  contextReady() {
  }
})
export default getMapInstance
</script>
