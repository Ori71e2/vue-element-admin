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
  watch: {
    amapInstance(newValue, oldValue) {
      this.$children.forEach(component => {
        component.$emit(CONSTANTS.AMAP_READY_EVENT, newValue)
      })
    }
  }
}
</script>
