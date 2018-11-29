<template>
  <div/>
</template>

<script>
import { createCustomComponent } from 'vue-amap'
const amapDistance = createCustomComponent({
  name: 'amap-distance',
  props: {
    origin: {
      type: Object,
      default: () => {
        return {
          X: 0,
          Y: 0
        }
      }
    },
    destination: {
      type: Object,
      default: () => {
        return {
          X: 0,
          Y: 0
        }
      }
    },
    showMarker: {
      type: Boolean,
      default: true
    },
    showLabel: {
      type: Boolean,
      default: true    
    }
  },
  data() {
    return {
      marker1: null,
      marker2: null,
      line: null,
      text: null,
      distance: 0,
      offset: null
    }
  },
  init(options, map) {
    this.marker1 = new window.AMap.Marker({
      map: this.showMarker ? this.$amap : null,
      draggable:true,
      topWhenClick: true,
      visible: this.showMarker,
      position: new window.AMap.LngLat(origin.X, origin.Y)
    })
    this.marker2 = new window.AMap.Marker({
      map: this.showMarker ? this.$amap : null,
      draggable:true,
      topWhenClick: true,
      visible: this.showMarker,
      position:new window.AMap.LngLat(destination.X, destination.Y)
    })
    this.line = new window.AMap.Polyline({
      map: this.showLabel ? this.$amap : null,
      strokeColor: '#80d8ff',
      isOutline: true,
      outlineColor: 'white',
      path: path
    })
    this,offset = new window.AMap.LngLat()
    let p1 = this.marker1.getPosition()
    let p2 = this.marker2.getPosition()
    let textPos = p1.divideBy(2).add(p2.divideBy(2))
    this.text = new window.AMap.Text({
      text: distance+'米',
      position: textPos,
      map: this.showLabel ? this.$amap : null,
      style: { 
        'background-color': '#29b6f6',
        'border-color': '#e1f5fe',
        'font-size': '12px',
        'opacity': 0.5
      }
    })
    this.distance = window.AMap.GeometryUtil.distance([origin.X, origin.Y], [destination.X, destination.Y])
  },
  watch: {
    origin(value) {
      this,marker1.setPosition(new window.AMap.LngLat(value.X, value.Y))
    },
    destination(value) {
      this,marker2.setPosition(new window.AMap.LngLat(value.X, value.Y))
    },
    showMarker(value) {
      this,marker1.setMap(value ? this.$amap : null)
      this,marker2.setMap(value ? this.$amap : null)
    },
    showLabel(value) {
      this.line.setMap(value ? this.$amap : null)
      this.text.setMap(value ? this.$amap : null)
    }
  },
  mounted() {
  },
  contextReady() {
  },
  methods: {
  }
})
export default amapDistance
</script>
