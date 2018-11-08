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
      type: String
    }
  },
  data() {
      return {
        geolocation: null,
        markerContent: null
      }
  },
  init(options, map){
    return new Promise(resolve => {
      window.AMap.plugin(['AMap.Geolocation'], () => {
        var marker = new AMap.Marker({
        position: new AMap.LngLat(116.39, 39.9),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: '北京'
        });
        this.geolocation = new window.AMap.Geolocation({
            enableHighAccuracy: true,// 是否使用高精度定位，默认:true
            timeout: 10000,          // 超过10秒后停止定位，默认：无穷大
            maximumAge: 0,           // 定位结果缓存0毫秒，默认：0
            convert: true,           // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
            //showButton: true,        // 显示定位按钮，默认：true
            //buttonPosition: 'LB',    // 定位按钮停靠位置，默认：'LB'，左下角
            //buttonOffset: new AMap.Pixel(10, 20),// 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            showMarker: true,        // 定位成功后在定位到的位置显示点标记，默认：true
            // markerOptions: {},
            showCircle: true,        // 定位成功后用圆圈表示定位精度范围，默认：true
            panToLocation: true,     // 定位成功后将定位到的位置作为地图中心点，默认：true
            zoomToAccuracy:true      // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        })
        this.$amap.addControl(this.geolocation)
        // this.geolocation.getCurrentPosition();
        window.AMap.event.addListener(this.geolocation, 'complete', this.onGeolocationComplete)//返回定位信息
        window.AMap.event.addListener(this.geolocation, 'error', this.onGeolocationError)      //返回定位出错信息
        resolve(this.geolocation)
      })

    })
  },
  mounted() {
  },
  activated() {
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
        result.position = {'X': data.position.getLng(), 'Y': data.position.getLat()}
        result.info = data.info
        this.$emit('get-current-location', result)
    },
    onGeolocationError(data) {
        var result = {}
        result.position = {'X': data.position.getLng(), 'Y': data.position.getLat()}
        result.info = data.info
        this.$emit('get-current-location', result)
    }
  }
})
export default customAmapGeolocation
</script>
