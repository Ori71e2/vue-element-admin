<template>
  <div/>
</template>
<script>
import { createCustomComponent } from 'vue-amap'
const getAmapInstance = createCustomComponent({
  name: 'get-amap-instance',
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
export default getAmapInstance
</script>
