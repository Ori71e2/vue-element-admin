<template>
  <div>
    <el-popover placement="top" trigger="hover">
      <div>
        <el-row :gutter="10" type="flex" class="row-bg" justify="space-around">
          <el-col :span="4">
            <el-switch :inactive-value="true" :active-value="false" v-model="activeSelectPoi" active-color="#dcdcdc" inactive-color="#13ce66" inactive-text="选点" class="el-switch"/>
          </el-col>
          <el-col :span="7"><el-input v-model="positionX" placeholder="请输入内容"/></el-col>
          <el-col :span="7"><el-input v-model="positionY" placeholder="请输入内容"/></el-col>
          <el-col :span="4"><el-button type="danger" @click="toggleCopy">复制</el-button></el-col>
          <el-col :span="4"><el-button type="danger" @click="toggleMove">移动</el-button></el-col>
        </el-row>
      </div>
      <el-button slot="reference" type="primary">
        选点定位<i class="el-icon-arrow-up el-icon--right"/>
      </el-button>
    </el-popover>
    <custom-amap-select-poi :active="activeSelectPoi" @get-select-position="setSelectPoi"/>
    <custom-amap-center :zoom="amapZoom" :center="amapCenter"/>
  </div>
</template>

<script>
import customAmapSelectPoi from '../amap-custom/SelectPoi'
import customAmapCenter from '../amap-custom/Center'
import spreadAmapInstance from '../mixins/SpreadAmapInstance'
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

export default {
  components: {
    customAmapSelectPoi, customAmapCenter
  },
  mixins: [spreadAmapInstance],
  data() {
    return {
      activeSelectPoi: false,
      selectPoi: '',
      positionX: '',
      positionY: '',
      copyBoard: '',
      // 这样设置，保证引入时不会触发setZoom, setCenter
      amapZoom: 1,
      amapCenter: ''
    }
  },
  mounted() {
  },
  methods: {
    toggleSelectPoi(newValue) {
      if (newValue) {
        this.activeSelectPoi = true
      } else {
        this.activeSelectPoi = false
      }
    },
    setSelectPoi(poi) {
      this.selectPoi = poi
      this.positionX = poi.X
      this.positionY = poi.Y
      this.copyBoard = [poi.X, poi.Y]
    },
    toggleCopy() {
      this.copyBoard = [this.positionX, this.positionY]
      this.$copyText(this.copyBoard).then(function(e) {
        console.log(e)
      }, function(e) {
        console.log(e)
      })
    },
    toggleMove() {
      this.amapZoom = 14
      this.amapCenter = { X: this.positionX, Y: this.positionY }
    }
  }
}
</script>
<style scoped>
.el-icon-arrow-down {
  font-size: 12px;
}
.el-switch {
  top: 50%;
  transform: translate(0,-50%);
}
</style>
