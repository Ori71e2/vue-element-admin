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
      change: false
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
        const newAddMarkersRawMap = new Map()
        const newModifyMarkersRawMap = new Map()
        // 筛选出变化或者新增的数据Map
        // 一是更新this.markersRawMap
        // 二是更新临时变量newMarkersRawMap，存储变化或者新增的值，更新的位置比较讲究
        newMarkersRaw.forEach((newM) => {
          // 将覆盖物属性值添加至extData
          newM.extData.id = newM.id
          newM.extData.SICCode = newM.SICCode
          newM.extData.modifyTime = newM.modifyTime
          newM.extData.deleteTime = newM.deleteTime
          newM.extData.startTime = newM.startTime
          newM.extData.endTime = newM.endTime
          newM.extData.deviceOwner = newM.deviceOwner
          // 设置覆盖物内在属性
          newM.draggable = false
          newM.clickable = true
          newM.visible = true
          if (!this.markersRawMap.has(newM.id)) {
            this.markersRawMap.set(newM.id, newM)
            newAddMarkersRawMap.set(newM.id, newM)
          } else {
            const newMModifyTime = new Date(newM.modifyTime)
            const mDodifyTime = new Date(this.markersRawMap.get(newM.id).modifyTime)
            // 测试用
            // if (newMModifyTime.getTime() >= mDodifyTime.getTime()) {
            if (newMModifyTime.getTime() > mDodifyTime.getTime()) {
              this.markersRawMap.set(newM.id, newM)
              newModifyMarkersRawMap.set(newM.id, newM)
            }
          }
        })
        newAddMarkersRawMap.forEach((value, key, map) => {
          this.markers.push(this.markerRawToRipe(value))
        })
        if (newModifyMarkersRawMap.size !== 0) {
          newModifyMarkersRawMap.forEach((value, key, map) => {
            if (JSON.stringify(this.markers) !== '[]') {
              this.markers.some((v, i) => {
                console.log('xxx')
                if (v.id === value.id) {
                  const { extData } = value
                  const clickable = true
                  const visible = true
                  const draggable = true
                  console.log(value)
                  Vue.set(this.markers[i], 'extData', JSON.stringify(extData))
                  Vue.set(this.markers[i], 'clickable', clickable)
                  Vue.set(this.markers[i], 'visible', visible)
                  Vue.set(this.markers[i], 'draggable', draggable)
                  return true
                }
              })
            }
          })
        }
      })
    },
    markerRawToRipe(v) {
      const { id, position, extData } = v
      const options = {
        position,
        // 要进行序列化
        extData: JSON.stringify(extData),
        clickable: v.clickable,
        visible: v.visible,
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
          // 奇淫技巧
          this.change = !this.change
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
            props: { change: this.change, text: this.markersRawMap.get(id).extData.detail, zoom: this.zoom, svgIconCode: this.markersRawMap.get(id).SICCode, 'voltage-class': 110, draggable: this.markersRawMap.get(id).draggable }
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
