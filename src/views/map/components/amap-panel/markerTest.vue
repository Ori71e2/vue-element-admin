<template>
  <div>
    <el-amap-marker :position="position" :events="marker.events" vid="component-marker" />
  </div>
</template>
<script>
import CONSTANTS from '../utils/constant'
export default {
  props: {
    'amapInstance': {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      position: [118.726184, 33.720615],
      marker: {
        topWhenClick: true,
        events: {
          click: () => {
            console.log('click marker')
          },
          dragend: (e) => {
            console.log('---event---: dragend')
            this.markers[0].position = [e.lnglat.lng, e.lnglat.lat]
          }
        }
      }
    }
  },
  watch: {
    amapInstance(newValue, oldValue) {
      this.$children.forEach(component => {
        component.$emit(CONSTANTS.AMAP_READY_EVENT, newValue)
      })
      console.log('newValue')
      console.log(newValue)
      this.watchValue(newValue)
    }
  },
  mounted: () => {

  },
  methods: {
    watchValue(newValue) {
      console.log(newValue)
    }
  }
}
</script>
