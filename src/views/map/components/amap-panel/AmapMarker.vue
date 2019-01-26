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
// import Vue from 'vue'
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
      // markersRaw: []
      markersRawMap: new Map(),
      change: 1
    }
  },
  computed: {
    markers: {
      get: function() {
        /* eslint-disable */
        const tmp = this.change
        /* eslint-enable */
        return [...this.markersRawMap.values()].map((v, i) => { return this.markerRawToRipe(v, i) })
      }
    }
    // markersVar() {
    //   return function(id) {
    //     /* eslint-disable */
    //     const tmp = this.change
    //     /* eslint-enable */
    //     console.log(this.markersRawMap.get(id))
    //     return this.markersRawMap.get(id).draggable
    //   }
    // }
  },
  watch: {
  },
  mounted() {
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
    },
    fetchMarkersListByParams() {
      fetchMarkersList().then((response) => {
        const newMarkersRaw = response.data.data
        newMarkersRaw.forEach((newM) => {
          newM.draggable = false
          if (!this.markersRawMap.has(newM.id)) {
            this.markersRawMap.set(newM.id, newM)
          } else {
            const newMModifyTime = new Date(newM.modifyTime)
            const mDodifyTime = new Date(this.markersRawMap.get(newM.id).modifyTime)
            if (newMModifyTime.getTime() > mDodifyTime.getTime()) {
              this.markersRawMap.set(newM.id, newM)
            }
          }
        })
        this.change += 1
      })
    },
    markerRawToRipe(v, i) {
      const { id, position, SICCode, extData } = v
      extData.id = id

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
            const draggable = !e.target.getDraggable()
            const id = JSON.parse(e.target.getExtData()).id
            const data = this.markersRawMap.get(id)
            data.draggable = !draggable
            e.target.setDraggable(draggable)
            this.markersRawMap.set(id, data)
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
        draggable: v.draggable,
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
