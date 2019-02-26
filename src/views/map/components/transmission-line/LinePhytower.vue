<template>
  <div />
</template>

<script>
import { createCustomComponent } from 'vue-amap'

const linePhytower = createCustomComponent({
  name: 'line-phytower',
  props: {
    position: {
      type: Array,
      default: [0, 0]
    }
  },
  data() {
    return {
      tower: null
    }
  },
  init(options, map) {
    this.tower = new AMap.Rectangle(options)
    // return new
    // resolve(this.scale)
  },
  contextReady() {
  },
  handlers: {
    showScale(newValue, oldValue) {
      if (newValue) {
        this.show()
      } else {
        this.hide()
      }
    }
  },
  created: () => {
  },
  mounted: () => {
  }
})

export default linePhytower
</script>
