<template>
  <div>
    <div>
      <el-amap-marker
        v-for="(marker) in markers"
        :key="marker.id"
        :position="marker.position"
        :events="marker.events"
        :visible="marker.visible"
        :draggable="marker.draggable"
        :clickable="marker.clickable"
        :ext-data="marker.extData"
        :vid="marker.vid"
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
import Vue from 'vue'

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
      markers: [],
      change2: false
    }
  },
  computed: {
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
        const newMarkersRawMap = new Map()
        // 筛选出变化或者新增的数据Map
        // 一是更新this.markersRawMap
        // 二是更新临时变量newMarkersRawMap，存储变化或者新增的值，更新的位置比较讲究
        newMarkersRaw.forEach((newM) => {
          newM.extData.id = newM.id
          newM.draggable = false
          if (!this.markersRawMap.has(newM.id)) {
            this.markersRawMap.set(newM.id, newM)
            newMarkersRawMap.set(newM.id, newM)
          } else {
            const newMModifyTime = new Date(newM.modifyTime)
            const mDodifyTime = new Date(this.markersRawMap.get(newM.id).modifyTime)
            if (newMModifyTime.getTime() > mDodifyTime.getTime()) {
              this.markersRawMap.set(newM.id, newM)
              newMarkersRawMap.set(newM.id, newM)
            }
          }
        })
        console.log(newMarkersRawMap.values())
        const tmpMarkers = []
        if (JSON.stringify(this.markers) === '[]') {
          newMarkersRawMap.forEach((value, key, map) => { tmpMarkers.push(this.markerRawToRipe(value)) })
        } else {
          this.markers.forEach((v, i) => {
            if (newMarkersRawMap.size !== 0) {
              if (!newMarkersRawMap.has(v.id)) {
                console.log(JSON.stringify(newMarkersRawMap))
                console.log('xx')
                tmpMarkers.push(this.markerRawToRipe(v))
              } else {
                console.log('xxx')
                const tmpMarkerVal = this.markersRawMap.get(v.id)
                const { extData, clickable, visible, draggable } = tmpMarkerVal
                v.extData = extData
                v.clickable = clickable
                v.visible = visible
                v.draggable = draggable
                Vue.set(this.markers, i, v)
              }
            }
          })
        }
        console.log(tmpMarkers)
        tmpMarkers.map((v) => { this.markers.push(v) })
      })
    },
    markerRawToRipe(v) {
      const { id, position, extData } = v
      const options = {
        position,
        // 要进行序列化
        extData: JSON.stringify(extData),
        clickable: true,
        visible: true,
        draggable: v.draggable
      }
      options.id = id
      options.vid = id
      options.events = {
        click: (e) => {
          console.log('click marker1')
          // 反序列化
          console.log(JSON.parse(e.target.getExtData()))
        },
        dblclick: (e) => {
          const draggable = e.target.getDraggable()
          const id = JSON.parse(e.target.getExtData()).id
          const data = this.markersRawMap.get(id)
          data.draggable = !draggable
          this.markersRawMap.set(id, data)
          e.target.setDraggable(!draggable)
        },
        rightclick: (e) => {
          this.changemarkersRaw()
        },
        dragend: (e) => {
          // console.log('---event---: dragend')
          // console.log([e.lnglat.lng, e.lnglat.lat])
        }
      }
      options.contentRender = (h, instance) => {
        return h(
          // 一定要给markerExp设置大小，否则无法方便点击和拖拽
          markerExp,
          {
            props: { text: this.markersRawMap.get(id).extData.detail, zoom: this.zoom, svgIconCode: this.markersRawMap.get(id).SICCode, 'voltage-class': 110, draggable: this.markersRawMap.get(id).draggable }
          }
        )
      }
      return options
    }
  }
}
</script>
<style scoped>

</style>
