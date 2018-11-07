<template>
  <div />
</template>

<script>
import { createCustomComponent } from 'vue-amap'

const customAmapScaleControl = createCustomComponent({
  props: {
    'showScale': {
      Boolean,
      default: false
    }
  },
  data() {
    return {
      scale: null
    }
  },
  init(_options, map) {
    return new Promise(resolve => {
      window.AMap.plugin(['AMap.Scale'], () => {
        this.scale = new window.AMap.Scale({
          visible: false
        })
        this.$amap.addControl(this.scale)
        resolve(this.scale)
      })
    })
  },
  contextReady() {
  },
  created: () => {
  },
  mounted: () => {
  },
  watch: {
    showScale(newValue, oldValue) {
      if (newValue) {
        this.scale.show()
      } else {
        this.scale.hide()
      }
    }
  }
})

export default customAmapScaleControl
</script>
