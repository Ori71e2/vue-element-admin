<template>
  <div>
    <el-amap-marker
      v-for="(marker, index) in markers"
      :key="marker.order"
      :ref="`polygon_${index}`"
      :position="marker.position"
      :events="marker.events"
      :visible="marker.visible"
      :draggable="marker.draggable"
      :clickable="marker.clickable"
      :ext-data="marker.extData"
      :vid="marker.index"
      :content-render="marker.contentRender"
    />
  </div>
</template>
<script>
import spreadAmapInstance from '../mixins/SpreadAmapInstance'
import markerExp from '../transmission-line/MarkerExp'
// const exampleComponents = {
//   props: ['text'],
//   template: `<div><svg-icon icon-class="pushpin"/>{{ text }}</div>`
// }
var markersArray = [
  { position: [118.720243, 33.776052], SICCode: 'SIC110401', extData: { DeviceOwner: 'syy', detail: '挖机施工', remark: '备注' }},
  { position: [118.719843, 33.775652], SICCode: 'SIC110402', extData: { DeviceOwner: 'syy', detail: '挖机施工', remark: '备注' }},
  { position: [118.719443, 33.775252], SICCode: 'SIC110403', extData: { DeviceOwner: 'syy', detail: '挖机施工', remark: '备注' }},
  { position: [118.719043, 33.774852], SICCode: 'SIC110404', extData: { DeviceOwner: 'syy', detail: '挖机施工', remark: '备注' }},
  { position: [118.718643, 33.774452], SICCode: 'SIC110405', extData: { DeviceOwner: 'syy', detail: '挖机施工', remark: '备注' }},
  { position: [118.718243, 33.774052], SICCode: 'SIC110406', extData: { DeviceOwner: 'syy', detail: '挖机施工', remark: '备注' }},
  { position: [118.717843, 33.773652], SICCode: 'SIC120100', extData: { DeviceOwner: 'syy', detail: '挖机施工', remark: '备注' }},
  { position: [118.717443, 33.773252], SICCode: 'SIC120101', extData: { DeviceOwner: 'syy', detail: '挖机施工', remark: '备注' }},
  { position: [118.717043, 33.772852], SICCode: 'SIC120102', extData: { DeviceOwner: 'syy', detail: '挖机施工', remark: '备注' }},
  { position: [118.716643, 33.772452], SICCode: 'SIC120103', extData: { DeviceOwner: 'syy', detail: '挖机施工', remark: '备注' }},
  { position: [118.716243, 33.772052], SICCode: 'SIC120104', extData: { DeviceOwner: 'syy', detail: '挖机施工', remark: '备注' }},
  { position: [118.715843, 33.771652], SICCode: 'SIC210100', extData: { DeviceOwner: 'syy', detail: '挖机施工', remark: '备注' }},
  { position: [118.715443, 33.771252], SICCode: 'SIC210101', extData: { DeviceOwner: 'syy', detail: '挖机施工', remark: '备注' }},
  { position: [118.715043, 33.770852], SICCode: 'SIC210202', extData: { DeviceOwner: 'syy', detail: '挖机施工', remark: '备注' }},
  { position: [118.714643, 33.770452], SICCode: 'SIC210303', extData: { DeviceOwner: 'syy', detail: '挖机施工', remark: '备注' }},
  { position: [118.714243, 33.770052], SICCode: 'SIC210404', extData: { DeviceOwner: 'syy', detail: '挖机施工', remark: '备注' }},
  { position: [118.713843, 33.769652], SICCode: 'SIC220100', extData: { DeviceOwner: 'syy', detail: '挖机施工', remark: '备注' }},
  { position: [118.713443, 33.769252], SICCode: 'SIC220101', extData: { DeviceOwner: 'syy', detail: '挖机施工', remark: '备注' }},
  { position: [118.713043, 33.768852], SICCode: 'SIC220102', extData: { DeviceOwner: 'syy', detail: '挖机施工', remark: '备注' }},
  { position: [118.712643, 33.768452], SICCode: 'SIC220103', extData: { DeviceOwner: 'syy', detail: '挖机施工', remark: '备注' }},
  { position: [118.712243, 33.768052], SICCode: 'SIC220200', extData: { DeviceOwner: 'syy', detail: '挖机施工', remark: '备注' }},
  { position: [118.711843, 33.767652], SICCode: 'SIC220201', extData: { DeviceOwner: 'syy', detail: '挖机施工', remark: '备注' }},
  { position: [118.711443, 33.767252], SICCode: 'SIC220202', extData: { DeviceOwner: 'syy', detail: '挖机施工', remark: '备注' }},
  { position: [118.711043, 33.766852], SICCode: 'SIC220203', extData: { DeviceOwner: 'syy', detail: '挖机施工', remark: '备注' }},
  { position: [118.710643, 33.766452], SICCode: 'SIC220300', extData: { DeviceOwner: 'syy', detail: '挖机施工', remark: '备注' }},
  { position: [118.710243, 33.766052], SICCode: 'SIC220301', extData: { DeviceOwner: 'syy', detail: '挖机施工', remark: '备注' }}
]
export default {
  components: {
    markerExp
  },
  mixins: [spreadAmapInstance],
  props: {
    zoom: {
      type: Number,
      default: 9
    }
  },
  data() {
    return {
      markersRaw: markersArray
    }
  },
  computed: {
    markers() {
      return this.markersRaw.map((v, i) => {
        const { position, SICCode, extData } = v
        return {
          position,
          events: {
            click: (e) => {
              console.log('click marker1')
              // 反序列化
              console.log(JSON.parse(e.target.getExtData()).detail)
            },
            dblclick: (e) => {
              e.target.setDraggable(!e.target.getDraggable())
            },
            rightclick: (e) => {
              this.changemarkersRaw()
            },
            dragend: (e) => {
              console.log('---event---: dragend')
              console.log([e.lnglat.lng, e.lnglat.lat])
            }
          },
          // 要进行序列化
          extData: JSON.stringify(extData),
          clickable: true,
          visible: true,
          draggable: false,
          contentRender: (h, instance) => {
            return h(
              // 一定要给markerExp设置大小，否则无法方便点击和拖拽
              markerExp,
              {
                props: { text: extData.detail, zoom: this.zoom, svgIconCode: SICCode, 'voltage-class': 110 }
              }
            )
          },
          order: i + 1,
          index: 'marker' + i
        }
      })
    }
  },
  watch: {
  },
  mounted() {
  },
  methods: {
    changemarkersRaw() {
      console.log(this.zoom)
      this.markersRaw.pop()
      console.log(this.zoom)
    }
  }
}
</script>
<style scoped>

</style>
