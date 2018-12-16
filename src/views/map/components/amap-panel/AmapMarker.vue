<template>
  <div>
    <el-amap-marker v-for="(marker, index) in markers" :key="marker.order" :ref="`polygon_${index}`" :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable" :ext-data="marker.order" :vid="index"/>
  </div>
</template>
<script>
import spreadAmapInstance from '../mixins/SpreadAmapInstance'

export default {
  mixins: [spreadAmapInstance],
  data() {
    return {
      markers: [
        {
          position: [118.720643, 33.776452],
          events: {
            click: (e) => {
              console.log('click marker1')
              console.log(e.target.getExtData())
            },
            dragend: (e) => {
              console.log('---event---: dragend')
              this.markers[0].position = [e.lnglat.lng, e.lnglat.lat]
            }
          },
          visible: true,
          draggable: false,
          template: '<span>1</span>',
          order: 1
        },
        {
          position: [118.750856, 33.710791],
          events: {
            click: () => {
              console.log('click marker')
            },
            dragend: (e) => {
              console.log('---event---: dragend')
              this.markers[0].position = [e.lnglat.lng, e.lnglat.lat]
            }
          },
          visible: true,
          draggable: false,
          template: '<span>1</span>',
          order: 2
        }
      ]
    }
  },
  computed: {
  },
  watch: {
  },
  mounted() {
  },
  methods: {
  }
}
</script>
<style scoped>

</style>
