<template>
  <div/>
</template>
<script>
import { createCustomComponent } from "vue-amap"
const selectPoi = createCustomComponent({
  name: 'select-poi',
  props: {
    'active': {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      position: {
        'X': '',
        'Y': ''
      },
      clickListener: ''
    }
  },
  init(options, map) {
    this.amap = this.$amap
    this.clickListener = window.AMap.event.addListener(this.$amap, "click", function(e) {
        this.setPosition(e)
      }, this)
    this.$emit("get-select-position", this.position)
    return marker
  },
  mounted: () => {},
  contextReady() {},
  methods: {
    setPosition(e) {
      this.oposition.X = e.lnglat.getLng()
      this.position.Y = e.lnglat.getLat()  
    }
  }
})
export default selectPoi
</script>
