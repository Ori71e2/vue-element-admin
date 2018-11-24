<template>
  <div />
</template>
<script>
import { createCustomComponent } from 'vue-amap'
const customAmapLockBounds = createCustomComponent({
  name: 'custom-amap-lcok-bounds',
  props: {
    NorthEast: {
      type: Array
      // default: [121.068093, 34.524897]
    },
    Southwest: {
      type: Array
      // default: [117.113014, 32.618797]
    },
    lock: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      bounds: null,
      defaultNorthEast: [121.068093, 34.524897],
      defaultSouthWest: [117.113014, 32.618797]
    }
  },
  init(options, map) {
    this.bounds = new window.AMap.Bounds(
      window.AMap.LngLat(this.defaultNorthEast[0], this.defaultNorthEast[1]),
      window.AMap.LngLat(this.defaultSouthWest[0], this.defaultSouthWest[1])
    )
    this.$amap.setLimitBounds(this.bounds)
    return this.bounds
  },
  contextReady() {
  },
  mounted: () => {
  },
  watch: {
    lock(newValue) {
      if (newValue) {
        this.$amap.setLimitBounds(this.bounds)
      } else {
        this.$amap.clearLimitBound()
      }
    }
  },
  methods: {
  }
})
export default customAmapLockBounds
</script>
<style>

</style>
