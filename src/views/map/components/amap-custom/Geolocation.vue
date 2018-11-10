<template>
  <div/>
</template>

<script>
import { createCustomComponent } from 'vue-amap'
const customAmapGeolocation = createCustomComponent({
  props: {
    'showMarker': {
      type: Boolean,
      default: true
    },
    'markerContent': {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      geolocation: null
      // markerContent: null
    }
  },
  init(options, map) {
    return new Promise(resolve => {
      window.AMap.plugin(['AMap.Geolocation'], () => {
        /*
        var marker = window.new AMap.Marker({
        position: new window.AMap.LngLat(116.39, 39.9),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: '北京'
        })
        */
        this.geolocation = new window.AMap.Geolocation({
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
          convert: true,
          showButton: true,
          buttonPosition: 'LB',
          // buttonOffset: new AMap.Pixel(10, 20)
          showMarker: true,
          // markerOptions: {},
          showCircle: true,
          panToLocation: true,
          zoomToAccuracy: true
        })
        this.$amap.addControl(this.geolocation)
        // this.geolocation.getCurrentPosition();
        // 返回定位信息
        window.AMap.event.addListener(this.geolocation, 'complete', this.onGeolocationComplete)
        // 返回定位出错信息
        window.AMap.event.addListener(this.geolocation, 'error', this.onGeolocationError)
        resolve(this.geolocation)
      })
    })
  },
  mounted() {
  },
  contextReady() {
  },
  computed: {
  },
  watch: {
  },
  methods: {
    onGeolocationComplete(data) {
      /*
      console.log('经度：' + data.position.getLng())
      console.log('纬度：' + data.position.getLat())
      if(data.accuracy){
          console.log('精度：' + data.accuracy + ' 米')
      }//如为IP精确定位结果则没有精度信息
      console.log('是否经过偏移：' + (data.isConverted ? '是' : '否'))
      console.log('Geolocation Success')
      */
      var result = {}
      result.position = { 'X': data.position.getLng(), 'Y': data.position.getLat() }
      result.info = data.info
      this.$emit('get-current-location', result)
    },
    onGeolocationError(data) {
      var result = {}
      result.position = { 'X': data.position.getLng(), 'Y': data.position.getLat() }
      result.info = data.info
      this.$emit('get-current-location', result)
    }
  }
})
export default customAmapGeolocation
</script>
