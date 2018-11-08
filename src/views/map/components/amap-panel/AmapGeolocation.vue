<template>
  <custom-amap-geolocation @get-current-location="setCurrentLocation"/>
</template>

<script>
import customAmapGeolocation from '../amap-custom/Geolocation'
import spreadAmapInstance from '../mixins/SpreadAmapInstance'
export default {
  components: {
    customAmapGeolocation
  },
  mixins: [spreadAmapInstance],
  data() {
  },
  mounted() {},
  methods: {
    setCurrentLocation(data) {
      if (data.info === 'SUCCESS') {
        console.log('经度：' + data.position.getLng())
        console.log('纬度：' + data.position.getLat())
      }
    }
  }
}
</script>
<style scoped>
</style>
