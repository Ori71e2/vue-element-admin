<template>
  <div />
</template>

<script>
import { createCustomComponent } from 'vue-amap'

const customMapToolsControl = createCustomComponent({
  props: {
    'show-scale': {
      Boolean,
      default: false
    },
    'show-toolBar': {
      Boolean,
      default: false
    },
    'show-overView': {
      Boolean,
      default: false
    }
  },
  data() {
    return {
      toolsControl: {
        scale: null,
        toolBar: null,
        overView: null
      }
    }
  },
  init(_options, map) {
    console.log('toolsControl init')
    return new Promise(resolve => {
      window.AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.OverView'], () => {
        this.toolsControl.scale = new window.AMap.Scale({
          visible: false
        })
        this.toolsControl.toolBar = new window.AMap.ToolBar({
          visible: false
        })
        this.toolsControl.overView = new window.AMap.OverView({
          visible: false
        })
        this.$amap.addControl(this.toolsControl.scale)
        this.$amap.addControl(this.toolsControl.toolBar)
        this.$amap.addControl(this.toolsControl.overView)
        resolve(this.toolsControl)
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
    'show-scale': (flag) => {

    },
    'show-toolBar': (flag) => {

    },
    'show-overView': (flag) => {

    }
  }
})

export default customMapToolsControl
</script>
