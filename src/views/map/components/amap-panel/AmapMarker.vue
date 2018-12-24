<template>
  <div>
    <el-amap-marker v-for="(marker, index) in markers" :key="marker.order" :ref="`polygon_${index}`" :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable" :ext-data="marker.order" :vid="index" :content-render="marker.contentRender" />
  </div>
</template>
<script>
import spreadAmapInstance from '../mixins/SpreadAmapInstance'
import marker from '../transmission-line/Marker'
// const exampleComponents = {
//   props: ['text'],
//   template: `<div><svg-icon icon-class="pushpin"/>{{ text }}</div>`
// }
export default {
  components: {
    marker
  },
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
          contentRender: (h, instance) => h(marker, { props: { text: this.text }}, ['xxxxxxx']),
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
          contentRender: (h, instance) => h(marker, { style: { backgroundColor: '#fff' }, props: { text: this.text }}, ['xxxxxxx']),
          order: 2
        }
      ],
      text: 'father is here'
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
