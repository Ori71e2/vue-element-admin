<template>
  <div/>
</template>
<script>
import { createCustomComponent } from 'vue-amap'
const customAmapSelectPoi = createCustomComponent({
  name: 'select-poi',
  data() {
    return {
      clickListener: null,
      isBind: null
    }
  },
  init(options, map) {
    this.amap = this.$amap
    this.clickListener = window.AMap.event.addListener(this.$amap, 'click', function(e) {
      this.setPosition(e)
    }, this)
    return this.clickListener
  },
  contextReady() {
  },
  handlers: {
  },
  methods: {
    setPosition(e) {
      var position = {}
      position.X = e.lnglat.getLng()
      position.Y = e.lnglat.getLat()
      this.$emit('get-select-position', position)
    }
  }
})
export default customAmapSelectPoi
</script>
