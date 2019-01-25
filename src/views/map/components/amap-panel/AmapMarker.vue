<template>
  <div>
    <div>
      <el-amap-marker
        v-for="(marker, index) in markers"
        :key="index"
        :position="marker.position"
        :events="marker.events"
        :visible="marker.visible"
        :draggable="marker.draggable"
        :clickable="marker.clickable"
        :ext-data="marker.extData"
        :vid="marker.order"
        :content-render="marker.contentRender"
      />
    </div>
    <el-amap-marker
      :position="marker1.position"
      :vid="marker1.index"
    />
    <div>
      <el-button slot="reference" type="primary" @click="addMarker">
        添加<i class="el-icon-arrow-up el-icon--right"/>
      </el-button>
    </div>
  </div>
</template>
<script>
import spreadAmapInstance from '../mixins/SpreadAmapInstance'
import markerExp from '../transmission-line/MarkerExp'
import { fetchMarkersList } from '@/api/amapMarkers'

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
      // markersRaw: markersArray
      markersRaw: [],
      MarkersList: [
        { position: [118.720243, 33.776052], SICCode: 'SIC110401', extData: { DeviceOwner: 'syy', detail: '挖机施工', remark: '备注' }},
        { position: [118.719843, 33.775652], SICCode: 'SIC110402', extData: { DeviceOwner: 'syy', detail: '挖机施工', remark: '备注' }},
        { position: [118.719443, 33.775252], SICCode: 'SIC110403', extData: { DeviceOwner: 'syy', detail: '挖机施工', remark: '备注' }}
      ],
      marker1: {
        position: [118.716184, 33.720615],
        index: '1'
      },
      hackReset: true,
      radius: 20
    }
  },
  computed: {
    markers() {
      return this.markersRaw.map((v, i) => { return this.markerRawToRipe(v, i) })
    }
  },
  watch: {
  },
  mounted() {
    this.markersRaw = this.MarkersList
    // this.fetchMarkersListByParams()
  },
  activated() {
    this.fetchMarkersListByParams()
  },
  methods: {
    changemarkersRaw() {
      this.markersRaw.pop()
      console.log(this.markers)
    },
    addMarker() {
      // this.hackReset = false
      this.markersRaw.push({ position: [118.710143, 33.766052], SICCode: 'SIC220301', extData: { DeviceOwner: 'syy', detail: '挖机施工', remark: '备注' }})
      console.log(this.markers)
      this.$forceUpdate()
      // this.$nextTick(() => {
      //   // this.hackReset = true
      // })
    },
    fetchMarkersListByParams() {
      fetchMarkersList().then((response) => {
        const data = response.data.data
        for (let i = 0; i < data.length; i++) {
          this.markersRaw.push(data[i])
        }
        console.log(this.markers)
      })
    },
    markerRawToRipe(v, i) {
      const { position, SICCode, extData } = v
      return {
        position,
        events: {
          click: (e) => {
            console.log('click marker1')
            // 反序列化
            // console.log(JSON.parse(e.target.getExtData()))
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
        index: 'marker' + Math.floor(Math.random() * 1000000).toString()
      }
    }
  }
}
</script>
<style scoped>

</style>
