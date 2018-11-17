<template>
  <div/>
</template>
<script>
import { createCustomComponent } from 'vue-amap'
const customAmapSelectPoi = createCustomComponent({
  name: 'select-poi',
  props: {
    'active': {
      type: Boolean,
      default: false
    }
  },
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
    this.isBind = true
    return this.clickListener
  },
  contextReady() {
  },
  handlers: {
  },
  watch: {
    active(newValue, oldValue) {
      if (newValue) {
        if (!this.isBind) {
          this.clickListener = window.AMap.event.addListener(this.$amap, 'click', function(e) { this.setPosition(e) }, this)
          this.isBind = true
        }
      } else {
        if (this.isBind) {
          window.AMap.event.removeListener(this.clickListener)
          this.isBind = false
          console.log(this.isBind)
        }
      }
    }
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
