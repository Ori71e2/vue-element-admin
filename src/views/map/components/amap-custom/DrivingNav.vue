<template>
  <div/>
</template>

<script>
import { createCustomComponent } from 'vue-amap'
const customAmapDrivingNav = createCustomComponent({
  props: {
    'originX': {
      type: Number
    },
    'originY': {
      type: Number
    },
    'destinationX': {
      type: Number
    },
    'destinationY': {
      type: Number
    },
    'panelId': {
    },
    'panelShow': {
      type: Boolean,
      default: true
    },
    'drivingSearch': {
      type: Boolean,
      default: false
    },
    'drivingClear': {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      panelDrivingNavElement: 0,
      origin: {
        'X': '',
        'Y': ''
      },
      destination: {
        'X': '',
        'Y': ''
      },
      drivingNav: null
    }
  },
  init(options, map) {
    return new Promise(resolve => {
      window.AMap.plugin(['AMap.Driving'], () => {
        this.drivingNav = new window.AMap.Driving({
          map: this.$amap,
          panel: this.panelId
        })
        resolve(this.drivingNav)
      })
    })
  },
  contextReady() {
  },
  mounted() {
  },
  handlers: {
    originX(value) {
      this.orgin.X = value
    },
    originY(value) {
      this.orgin.Y = value
    },
    destinationX(value) {
      this.destination.X = value
    },
    destinationY(value) {
      this.destination.Y = value
    },
    panelShow(value) {
      if (value) {
        this.panelDrivingNavElement.hidden = true
      } else {
        this.panelDrivingNavElement.hidden = false
      }
    },
    drivingSearch(value) {
      var errorMsg = ''
      // 根据起终点经纬度规划驾车导航路线
      // this.drivingNav.search(new this.AMap.LngLat(118.716087,33.720534), new this.AMap.LngLat(118.720623, 33.70349))
      if (this.origin.X < 0 || this.origin.X > 180) {
        errorMsg = ' 起点经度 '
      }
      if (this.origin.Y < 0 || this.origin.Y > 90) {
        errorMsg = errorMsg + ' 起点维度 '
      }
      if (this.destination.X < 0 || this.destination.X > 180) {
        errorMsg = errorMsg + ' 终点经度 '
      }
      if (this.destination.Y < 0 || this.destination.Y > 90) {
        errorMsg = errorMsg + ' 终点维度 '
      }
      if (errorMsg !== '') {
        errorMsg += '取值不在范围内！'
        console.log(errorMsg)
        return
      }
      this.drivingNav.search(new this.AMap.LngLat(this.origin.X, this.origin.Y), new this.AMap.LngLat(this.destination.X, this.destination.Y))
    },
    drivingClear(value) {
      this.drivingNav.clear()
    }
  },
  methods: {
  }
})
export default customAmapDrivingNav
</script>
