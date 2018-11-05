<template>
  <div />
</template>

<script>
import { createCustomComponent } from 'vue-amap'

const customAmapToolBarControl = createCustomComponent({
  props: {
    'showToolBar': {
      Boolean,
      default: false
    },
    'showToolBarDirection': {
      Boolean,
      default: false
    },
    'showToolBarRule': {
      Boolean,
      default: false
    }
  },
  data() {
    return {
      toolBar: null
    }
  },
  init(_options, map) {
    return new Promise(resolve => {
      window.AMap.plugin(['AMap.ToolBar'], () => {
        this.toolBar = new window.AMap.ToolBar({
          visible: false
        })
        this.$amap.addControl(this.toolBar)
        resolve(this.toolBar)
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
    showToolBar(newValue, oldValue) {
      if (newValue) {
        this.toolBar.show()
      } else {
        this.toolBar.hide()
      }
    },
    showToolBarDirection(newValue, oldValue) {
      if (newValue) {
        this.toolBar.showDirection()
      } else {
        this.overView.hideDirection()
      }
    },
    showToolBarRule(newValue, oldValue) {
      if (newValue) {
        this.toolBar.showRuler()
      } else {
        this.toolBar.hideRuler()
      }
    }
  }
})

export default customAmapToolBarControl
</script>
