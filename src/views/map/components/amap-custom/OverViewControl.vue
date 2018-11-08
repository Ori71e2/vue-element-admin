<template>
  <div />
</template>

<script>
import { createCustomComponent } from 'vue-amap'

const customAmapOverViewControl = createCustomComponent({
  props: {
    'showOverView': {
      Boolean,
      default: false
    },
    'openOverView': {
      Boolean,
      default: false
    }
  },
  data() {
    return {
      overView: null
    }
  },
  init(options, map) {
    return new Promise(resolve => {
      window.AMap.plugin(['AMap.OverView'], () => {
        this.overView = new window.AMap.OverView({
          visible: false
        })
        this.$amap.addControl(this.overView)
        resolve(this.overView)
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
    showOverView(newValue, oldValue) {
      if (newValue) {
        this.overView.show()
      } else {
        this.overView.hide()
      }
    },
    openOverView(newValue, oldValue) {
      if (newValue) {
        this.overView.open()
      } else {
        this.overView.close()
      }
    }
  }
})

export default customAmapOverViewControl
</script>
